from cherrypy import tree, config, engine
from app import create_app
from pyspark import SparkContext, SparkConf
from paste.translogger import TransLogger


def init_spark():
    conf = SparkConf().setAppName('imdb')
    sc = SparkContext(conf=conf, pyFiles=['app.py', 'engine.py'])
    return sc


def run_server(app):
    app_logged = TransLogger(application=app)
    tree.graft(app_logged, '/')
    config.update({
        'engine.autoreload.on': True,
        'log.screen': True,
        'server.socket_port': 5432,
        'server.socket_host': '0.0.0.0'
    })
    engine.start()
    engine.block()


def main():
    sc = init_spark()
    app = create_app(sc)
    run_server(app)


if __name__ == '__main__':
    main()
