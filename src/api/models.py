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
    # cotizaciones = db.relationship('Cotizacion', backref='user', uselist=True)   #RELACION,TABLA USER-ORDER:
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
        new_user = cls(**user)
        db.session.add(new_user)
        try:
            db.session.commit()
            return new_user
        except Exception as error:
            print(error)
            db.session.rollback()
            return None
            
    def update(self, user):
        if "email" in user:
            self.email = user['email']
        if "phone_number" in user:
            self.phone_number = user['phone_number']
        if "full_name" in user:
            self.full_name = user['full_name']
        try:
            db.session.commit()
            return True
        except Exception as error:
            db.session.rollback()
            return False    
    
    def update_password(self, user):
        if "password" in user:
            self.password = user['password']
        try:
            db.session.commit()
            return True
        except Exception as error:
            db.session.rollback()
            return False
    
    
class UserOrder(db.Model): #TABLA DE TRABAJOS REALIZADOS
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(100), nullable=False)
    service_name = db.Column(db.String(100), nullable=False)
    work_link = db.Column(db.String(250), nullable=False)
    __table_args__=(db.UniqueConstraint(
        'user_id',
        'id',
        name="unique_user_order"
    ),) 

    @classmethod    
    def create(cls,trabajos_realizados):
        new_work = cls(**trabajos_realizados)
        db.session.add(new_work)
        try:
            db.session.commit()
            return new_work
        except Exception as error:
            print(error)
            db.session.rollback()
            return None     
    
    def serialize(self):
        return{
            "id": self.id,
            "full_name": self.full_name,
            "date": self.date,
            "service_name": self.service_name,
            "work_link": self.work_link
        } 
           
class Cotizacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    service = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(400), nullable=False)
    description = db.Column(db.String(400), nullable=False)
       
    
    @classmethod    
    def create(cls,quotation):
        new_quotation = cls(**quotation)
        db.session.add(new_quotation)
        try:
            db.session.commit()
            return new_quotation
        except Exception as error:
            print(error)
            db.session.rollback()
            return None 
   
    def serialize(self):
        return{
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "phone_number": self.phone_number,
            
        }
        
        
        