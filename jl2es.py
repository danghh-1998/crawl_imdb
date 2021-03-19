import json
import re
from datetime import datetime
from elasticsearch6 import Elasticsearch

if __name__ == '__main__':
    elasticsearch = Elasticsearch(hosts=['192.168.1.68:9200'])
    elasticsearch.indices.create(index='imdb', ignore=400)
    with open('movies.jl', 'r') as file:
        lines = file.readlines()
        for line in lines:
            data = json.loads(line)
            casts = [f'{key.replace("-", "").strip()}-{val.replace("-", "").strip()}' for key, val in
                     data['cast'].items()]
            try:
                release_date, place = re.findall(r'(.+)\s\((.+)\)', data['release_date'])[0]
                data['release_date'] = str(datetime.strptime(release_date, '%d %B %Y').replace(day=1).date())
            except ValueError:
                try:
                    data['release_date'] = str(datetime.strptime(release_date, '%B %Y').date())
                except ValueError:
                    data['release_date'] = str(datetime.strptime(release_date, '%Y').date())
            except KeyError:
                place = 'Unknown'
            try:
                runtime = re.findall(r'(\d+)\smin', data['runtime'])[0]
                data['runtime'] = int(runtime)
            except KeyError:
                data.pop('runtime', None)
            data['published_place'] = place
            data['cast'] = casts
            elasticsearch.index(index='imdb', doc_type='imdb', body=json.dumps(data).encode('utf-8'))
