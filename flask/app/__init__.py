import os
import datetime
from flask import Flask
from app.config import config_map
from app.extensions import init_extensions


def create_app(config_name=None):
    if config_name is None:
        config_name = os.getenv('FLASK_CONFIG', 'default')

    app = Flask(__name__)
    app.config.from_object(config_map[config_name])

    init_extensions(app)

    from app.routes.main import main_bp
    from app.routes.auth import auth_bp
    app.register_blueprint(main_bp)
    app.register_blueprint(auth_bp, url_prefix='/auth')

    from app.routes import register_error_handlers
    register_error_handlers(app)

    @app.context_processor
    def inject_globals():
        return {'now': datetime.datetime.now}

    return app
