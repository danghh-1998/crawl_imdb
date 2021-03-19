# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

from scrapy import Item, Field
from itemloaders.processors import TakeFirst, MapCompose

BASE_URL = 'https://www.imdb.com'


def clean_string(inp):
    return [item.strip() for item in inp]


def clean_dict(inp):
    return [{key.strip(): value.strip() for key, value in dictitems.items()} for dictitems in inp]


def clean_list(inp):
    return [item.strip() for item in inp]


def add_base_url(inp):
    return [f'{BASE_URL}{item}' for item in inp]


class Movie(Item):
    url = Field(input_processor=clean_string, output_processor=TakeFirst())
    title = Field(input_processor=clean_string, output_processor=TakeFirst())
    cast = Field(input_processor=clean_list)
    genres = Field(input_processor=clean_list)
    poster = Field(input_processor=clean_string, output_processor=TakeFirst())
    trailer = Field(input_processor=add_base_url, output_processor=TakeFirst())
    creator = Field(input_processor=clean_list)
    # keywords = Field(input_processor=clean_list)
    description = Field(input_processor=clean_string, output_processor=TakeFirst())
    release_date = Field(input_processor=clean_string, output_processor=TakeFirst())
    star = Field(input_processor=clean_string, output_processor=TakeFirst())
    runtime = Field(input_processor=clean_string, output_processor=TakeFirst())
