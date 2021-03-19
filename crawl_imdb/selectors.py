NEXT_BUTTON = '//*[@id="main"]/div/div[1]/div[2]/a[last()]/@href'
MOVIES_LINK = '//*[@id="main"]/div/div[3]/div/div/div[2]/div/div[1]/span/span[2]/a'
TITLE_SELECTOR = '//*[@id="title-overview-widget"]/div[1]/div[2]/div/div[2]/div[2]/h1/text()'
CAST_ROWS_SELECTOR = '//*[@id="titleCast"]/table/tr[@class and count(td) > 1]'
CASTER_SELECTOR = 'td[2]/a/text()'
CHARACTER_SELECTOR = 'td[@class="character"]/a[1]/text()'
GENRES_SELECTOR = '//*[@id="titleStoryLine"]/div[h4/text()="Genres:"]/a/text()'
POSTER_SELECTOR = '//*[@id="title-overview-widget"]/div[1]/div[@class="slate_wrapper"]/div[@class="poster"]/a/img/@src'
TRAILER_SELECTOR = '//*[@id="title-overview-widget"]/div[1]/div[@class="slate_wrapper"]/div[@class="slate"]/a/@href'
CREATOR_SELECTOR = '//*[@id="title-overview-widget"]/div[@class="plot_summary_wrapper"]/div[@class="plot_summary ' \
                   '"]/div[@class="credit_summary_item"][1]/a/text() '
DESCRIPTION_SELECTOR = '//*[@id="titleStoryLine"]/div[1]/p/span/text()'
RELEASE_DATE_SELECTOR = '//*[@id="titleDetails"]/div[h4/text()="Release Date:"]/text()'
STAR_SELECTOR = '//*[@id="title-overview-widget"]/div[@class="vital"]/div[@class="title_block"]/div/div[' \
                '@class="ratings_wrapper"]/div[@class="imdbRating"]/div[@class="ratingValue"]/strong/span/text() '
RUNTIME_SELECTOR = '//*[@id="titleDetails"]/div[h4/text()="Runtime:"]/time/text()'
KEYWORDS_SELECTOR = '//*[@id="keywords_content"]/table/tbody/tr/td[@class="soda sodavote"]/div[' \
                    '@class="sodatext"]/a/text() '
