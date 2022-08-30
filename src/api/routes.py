"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cotizacion, UserOrder
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash,check_password_hash
from flask_jwt_extended import get_jwt_identity,create_access_token,jwt_required


# create flask app
api = Blueprint('api', __name__)




# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login",methods=["POST"])
def create_login():
    email = request.json.get("email", None)
    password =request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()
    if user is None:
        return jsonify({"msg": "El usuario nop existe"}), 401
    salt = user.salt
    if check_password_hash(user.password, salt + password):
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token)
    return jsonify({"msg": "contraseña incorrecta"}), 401

#|REGISTRO DE USUARIO
@api.route("/register", methods =['POST'])
def handle_register():
    body = request.json 
    password = body["password"]
    salt = os.urandom(8).hex()
    body["salt"] = salt
    body["password"] = generate_password_hash(salt+password)
    create_user = User.create(body)
    if create_user is not None:
        return jsonify(create_user.serialize()),201
    return jsonify({"message":"Usuario no creado"}),400    

#REGISTRO DE NUEVAS COTIZACIONES
@api.route("/cotizacion", methods =['POST'])
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
        return jsonify(new_quotation.serialize()),201
    return jsonify({"message":"cotizacion no creada"}),400
    
    #REGISTRO DE TRABAJOS REALIZADOS
@api.route("/trabajos-realizados", methods =['POST'])
def trabajos_realizados():
    body = request.json
    full_name = body["full_name"]
    date = body["date"]
    service_name = body["service_name"]
    work_link = body["work_link"]
    new_trabajos = Trabajos.create(body)
    if new_trabajos is not None:
        return jsonify(new_trabajos.serialize()),201
    return jsonify({"message":"trabajos no realizados"}),400