# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import json
from itemadapter import ItemAdapter
from kafka import KafkaProducer
import time


class JSONPipeline:
    def open_spider(self, _):
        self.file = open('movies.jl', 'a+')

    def process_item(self, item, _):
        line = f'{json.dumps(ItemAdapter(item=item).asdict())}\n'
        self.file.write(line)
        return item

    def close_spider(self, _):
        self.file.close()


class KafkaPipeline:
    def open_spider(self, _):
        self.producer = KafkaProducer(bootstrap_servers=['192.168.1.68:9092'])

    def process_item(self, item, _):
        data = json.dumps(ItemAdapter(item=item).asdict()).encode('utf-8')
        self.producer.send('imdb', data)
        time.sleep(1)

    def close_spider(self, _):
        self.producer.close()
