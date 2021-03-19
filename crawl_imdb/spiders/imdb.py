import scrapy
from scrapy.loader import ItemLoader
from crawl_imdb.items import Movie
from crawl_imdb.selectors import *
from scrapy import Request


def first_or_none(iterable):
    return next(iter(iterable or []), '')


class ImdbSpider(scrapy.Spider):
    name = 'imdb'
    allowed_domains = ['imdb.com']
    BASE_URL = 'https://www.imdb.com'
    start_urls = [f'{BASE_URL}/search/title/?release_date=1900-12-31,2020-12-23&count=250&view=simple']

    def parse(self, response, **kwargs):
        next_page = response.xpath(NEXT_BUTTON).get()
        links = [f'{ImdbSpider.BASE_URL}{tag.attrib["href"]}' for tag in
                 response.xpath(MOVIES_LINK)]
        for link in links:
            yield Request(link, callback=self.parse_page, dont_filter=True)
        yield response.follow(next_page, callback=self.parse, dont_filter=True)

    def parse_page(self, response):
        loader = ItemLoader(item=Movie(), response=response)
        loader.add_value('url', response.url)
        loader.add_xpath('title', TITLE_SELECTOR)
        rows = response.xpath(CAST_ROWS_SELECTOR)
        loader.add_value('cast', [
            f'{first_or_none(row.xpath(CASTER_SELECTOR)).extract()}: {first_or_none(row.xpath(CHARACTER_SELECTOR).extract())} '
            for row in rows])
        loader.add_xpath('genres', GENRES_SELECTOR)
        loader.add_xpath('poster', POSTER_SELECTOR)
        loader.add_xpath('trailer', TRAILER_SELECTOR)
        loader.add_xpath('creator', CREATOR_SELECTOR)
        loader.add_xpath('description', DESCRIPTION_SELECTOR)
        loader.add_xpath('release_date', RELEASE_DATE_SELECTOR)
        loader.add_xpath('star', STAR_SELECTOR)
        loader.add_xpath('runtime', RUNTIME_SELECTOR)
        # keywords_page = f'{response.url}keywords'
        # yield response.follow(keywords_page, callback=self.parse_keywords, cb_kwargs={'item': loader.load_item()})
        yield loader.load_item()

    def parse_keywords(self, response, item):
        loader = ItemLoader(item=item, response=response)
        loader.add_xpath('keywords', KEYWORDS_SELECTOR)
        yield loader.load_item()
