from datetime import datetime


class Engine:
    def __init__(self, sc):
        es_read_config = {'es.nodes': '192.168.1.68',
                          'es.resource': 'imdb/imdb',
                          'es.scroll.size': '10000',
                          'es.scroll.keepalive': '20m'}
        es_rdd = sc.newAPIHadoopRDD(inputFormatClass="org.elasticsearch.hadoop.mr.EsInputFormat",
                                    keyClass="org.apache.hadoop.io.NullWritable",
                                    valueClass="org.elasticsearch.hadoop.mr.LinkedMapWritable",
                                    conf=es_read_config)
        self.rdd = es_rdd.map(lambda item: {**{'id': item[0]}, **item[1]})

    def filter_movies(self, title, genre, star, published_place, release_date):
        filtered_rdd = self.rdd
        if title != '':
            filtered_rdd = filtered_rdd.filter(lambda item: 'title' in item and title.lower() in item['title'].lower())
        if genre != '':
            filtered_rdd = filtered_rdd.filter(lambda item: 'genres' in item and genre in item['genres'])
        if star != '':
            filtered_rdd = filtered_rdd.filter(lambda item: 'star' in item and float(item['star']) > float(star))
        if published_place != '':
            filtered_rdd = filtered_rdd.filter(
                lambda item: 'published_place' in item and item['published_place'] == published_place)
        if release_date != '':
            filtered_rdd = filtered_rdd.filter(
                lambda item: 'release_date' in item and datetime.strptime(item['release_date'], '%Y-%m-%d').year == int(
                    release_date))
        return filtered_rdd
