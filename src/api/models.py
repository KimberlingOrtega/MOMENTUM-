from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    salt = db.Column(db.String(80), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    orders = db.relationship('UserOrder', backref='user', uselist=True)   #RELACION,TABLA USER-ORDER:
   
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
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
    __table_args__=(db.UniqueConstraint(
        'user_id',
        'id',
        name="unique_user_order"
    ),)     
    
    def serialize(self):
        return{
            "id": self.id
        }      