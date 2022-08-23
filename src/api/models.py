from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    phone_number = db.Column(db.String(20), unique=True, nullable=False)
    salt = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    orders = db.relationship('UserOrder', backref='user', uselist=True)
    cotizaciones = db.relationship('Cotizacion', backref='user', uselist=True)   #RELACION,TABLA USER-ORDER:
    is_admin = db.Column(db.Boolean, nullable=True)
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone_number": self.phone_number,
            "salt": self.salt
            # do not serialize the password, its a security breach
        }
    @classmethod    
    def create(cls,user):
        try:
            new_user = cls(**user)
            db.session.add(new_user)
            db.session.commit()
            return new_user
        except Exception as error:
            print(error)
            db.session.rollback()
            return None
           
class UserOrder(db.Model): #TABLA DE ORDEN 
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    link = db.Column(db.String(250), nullable=False)
    __table_args__=(db.UniqueConstraint(
        'user_id',
        'id',
        name="unique_user_order"
    ),)     
    
    def serialize(self):
        return{
            "id": self.id
        } 
           
class Cotizacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    service = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False)  
    __table_args__=(db.UniqueConstraint(
        'user_id',
        'id',
        name="unique_cotizaciones"
    ),)  
     