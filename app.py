import logging
import json
from flask import Blueprint, Flask, request
from engine import Engine

main = Blueprint('main', __name__)
logging.basicConfig(level=logging.INFO)


@main.route('/movies')
def filter_movies():
    title = request.args.get('title', default='', type=str)
    genre = request.args.get('genre', default='', type=str)
    star = request.args.get('star', default='', type=str)
    published_place = request.args.get('published_place', default='', type=str)
    release_date = request.args.get('release_date', default='', type=str)
    movies = engine.filter_movies(title, genre, star, published_place, release_date).take(20)
    return json.dumps(movies)


def create_app(context):
    global engine
    engine = Engine(sc=context)
    app = Flask(__name__)
    app.register_blueprint(main)
    return app
