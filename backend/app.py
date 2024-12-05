import os

from flask import Flask

from config import DevelopmentConfig, TestingConfig, ProductionConfig
from models import db

def create_app():
    app = Flask(__name__)
    env = os.environ.get('FLASK_ENV', 'development')
    if env == 'development':
        app.config.from_object(DevelopmentConfig)
    elif env == 'testing':
        app.config.from_object(TestingConfig)
    elif env == 'prodection':
        app.config.from_object(ProductionConfig)
    db.init_app(app)
    return app