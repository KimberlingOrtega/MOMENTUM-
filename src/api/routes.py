"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cotizacion, UserOrder
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import get_jwt_identity, create_access_token, jwt_required


# create flask app
api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def create_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()
    if user is None:
        return jsonify({"msg": "El usuario no existe"}), 404
    salt = user.salt
    if check_password_hash(user.password, salt + password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token, "is_admin": user.is_admin, "user_id": user.id})
    return jsonify({"message": "contraseña incorrecta"}), 401

# |REGISTRO DE USUARIO


@api.route("/register", methods=['POST'])
def handle_register():
    body = request.json
    password = body["password"]
    salt = os.urandom(8).hex()
    body["salt"] = salt
    body["password"] = generate_password_hash(salt+password)
    create_user = User.create(body)
    if create_user is not None:
        return jsonify({"message": "Usuario creado correctamente"}), 201
    return jsonify({"message": "No se pudo crear el usuario, intente de nuevo"}), 500

# REGISTRO DE NUEVAS COTIZACIONES


@api.route("/cotizacion", methods=['POST'])
def quotation():
    body = request.json
    full_name = body["full_name"]
    email = body["email"]
    phone_number = body["phone_number"]
    service = body["service"]
    location = body["location"]
    description = body["description"]
    new_quotation = Cotizacion.create(body)
    if new_quotation is not None:
        return jsonify(new_quotation.serialize()), 201
    return jsonify({"message": "cotizacion no creada"}), 400


# REGISTRO DE TRABAJOS REALIZADOS
@api.route("/trabajos-realizados", methods=['POST', 'GET'])
def trabajos_realizados():
    if request.method == "POST":
        body = request.json
        full_name = body["full_name"]
        # date = body["date"]
        # service_name = body["service_name"]
        # work_link = body["work_link"]
        user = User.query.filter_by(full_name=full_name).one_or_none()
        if user is not None:
            body["user_id"] = user.id
            new_trabajos = UserOrder.create(body)
            if new_trabajos is not None:
                return jsonify({"message": "Trabajo añadido correctamente"}), 201
            return jsonify({"message": "No se pudo añadir el trabajo realizado"}), 500
        return jsonify({"message": "Usuario no encontrado"}), 404
    elif request.method == "GET":
        works = UserOrder.query.all()
        print(works)
        works_list = []
        for work in works:
            works_list.append(work.serialize())
        return jsonify({"results": works_list}), 200


@api.route("/obtener-datos-usuario", methods=['GET'])
@jwt_required()
def obtener_dato():
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).one_or_none()
    if user is not None:
        return jsonify({"result": user.serialize()}), 200
    return jsonify({"message": "usuario no encontrado"}), 404
    # body = request.json


@api.route("/actualizar-datos-usuario", methods=['POST'])
@jwt_required()
def actualizar_datos_usuario():
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).one_or_none()
    body = request.json
    if user is not None:
        updated = user.update(body)
        if updated:
            return jsonify({"message": "Datos actualizados!"}), 200
        return jsonify({"message": "No se pudo actualizar los datos"}), 500
    return jsonify({"message": "Usuario no encontrado"}), 404


@api.route("/cambiar-contrasena", methods=['POST'])
@jwt_required()
def verificar_contrasena():
    current_user = get_jwt_identity()
    body = request.json
    user = User.query.filter_by(id=current_user).one_or_none()
    password = body["password"]
    current_password = body["current_password"]
    if user is not None:
        salt = user.salt
        body["password"] = generate_password_hash(salt+password)
        if check_password_hash(user.password, salt + current_password):
            updated = user.update_password(body)
            if updated:
                return jsonify({"message": "Contraseña actualizada."}), 200
            return jsonify({"message": "Ha ocurrido un error en el servidor."}), 500
        return jsonify({"message": "Contraseña incorrecta."}), 401
    return jsonify({"message": "Usuario no encontrado."}), 404
