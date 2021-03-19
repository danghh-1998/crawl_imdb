import React from 'react';
import { Layout, Menu, Input, Typography, Form, Select, Row, Col, Card } from 'antd';
import Moment from 'react-moment';
import './home.css';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { Meta } = Card;

const data = [
  {
    'id': 'Cx79qnYB85bvUe-qvXT0',
    'trailer': 'https://www.imdb.com/video/imdb/vi81247769?playlistId=tt4179452',
    'cast': [
      'Alexander Dreymon-Uhtred',
      'Eliza Butterworth-Aelswith',
      'Ian Hart-Beocca',
      'Arnas Fedaravicius-Sihtric',
      'Millie Brady-Aethelflaed',
      'Mark Rowley-Finan',
      'Emily Cox-Brida',
      'David Dawson-Alfred',
      'Harry McEntire-Aethelwold',
      'James Northcote-Aldhelm',
      'Ewan Mitchell-Osferth',
      'Adrian Bouchet-Steapa',
      'Jeppe Beck Laursen-Haesten',
      'Toby Regbo-Aethelred',
      'Timothy Innes-Edward',
      'Cavan Clerkin-Pyrlig',
      'Adrian Schiller-Aethelhelm',
      'Eva Birthistle-Hild',
    ],
    'creator': [
      'Alexander Dreymon',
      'Eliza Butterworth',
      'Ian Hart',
      'See full cast & crew',
    ],
    'star': '8.4',
    'release_date': '2015-10-01',
    'genres': [
      'Action',
      'Drama',
      'History',
    ],
    'description': 'The year is 872, and many of the separate kingdoms of what we now know as England have fallen to the invading Danes, leaving the great kingdom of Wessex standing alone and defiant under the command of King Alfred. Against this turbulent backdrop lives our hero, Uhtred. Born the son of a Saxon nobleman, he is captured by the Danes and raised as one of their own. Forced to choose between the country of his birth and the people of his upbringing, his loyalties are ever tested. What is he? Saxon or Dane? On a quest to reclaim his birthright, Uhtred must tread a dangerous path between both sides if he is to play his part in the birth of a new nation and, ultimately, recapture his ancestral lands...',
    'runtime': 60,
    'published_place': 'USA',
    'title': 'The Last Kingdom',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    'url': 'https://www.imdb.com/title/tt4179452/',
  },
  {
    'id': 'VSJzq3YB85bvUe-qVFJ6',
    'trailer': 'https://www.imdb.com/video/imdb/vi425240089?playlistId=tt2134101',
    'cast': [
      'Aleksandr Vilkov-',
      'Aleksey Cherevatenko-',
      'Anatoliy Bogush-',
      'Anatoliy Zinovenko-',
      'Andrey Moroz-',
      'Anjelika Girich-',
      'Ekaterina Savenkova-',
      'Evgeniy Pashin-',
      'Grigoriy German-',
      'Irina Rudenko-',
      'Ivan Rozin-',
      'Marina Kuklina-',
      'Oleg Stalchuk-',
      'Rusian Gofurov-',
      'Vladimir Levitskiy-',
    ],
    'creator': [
      'Andrew Prokhorov',
    ],
    'star': '8.3',
    'release_date': '2013-05-01',
    'genres': [
      'Action',
      'Adventure',
      'Horror',
      'Sci-Fi',
    ],
    'description': 'Following the events of Metro 2033, Artyom, now an experienced ranger, confronted with guilt must go on a journey to face threats from outside the metro and within, as he finds out that he is humanity\'s last salvation for peace.',
    'published_place': 'USA',
    'title': 'Metro: Last Light',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMjE3MDUzNDM3MV5BMl5BanBnXkFtZTgwNTQ4MTk4MDE@._V1_UY268_CR3,0,182,268_AL_.jpg',
    'url': 'https://www.imdb.com/title/tt2134101/',
  },
  {
    'id': '-yJ8q3YB85bvUe-qPd1j',
    'trailer': 'https://www.imdb.com/video/imdb/vi3914245657?playlistId=tt2140553',
    'cast': [
      'Troy Baker-Joel',
      'Ashley Johnson-Ellie',
      'Hana Hayes-Sarah',
      'Jeffrey Pierce-Tommy',
      'Annie Wersching-Tess',
      'Merle Dandridge-Marlene',
      'W. Earl Brown-Bill',
      'Brandon Scott-Henry',
      'Nadji Jeter-Sam',
      'Robin Atkin Downes-Robert',
      'Ashley Scott-Maria',
      'Reuben Langdon-James',
      'Nolan North-David',
      'Laura Bailey-Additional Voices',
      'John Eric Bentley-Additional Voices',
    ],
    'creator': [
      'Neil Druckmann',
      'Bruce Straley',
    ],
    'star': '9.7',
    'release_date': '2013-06-01',
    'genres': [
      'Action',
      'Adventure',
      'Drama',
      'Horror',
      'Sci-Fi',
      'Thriller',
    ],
    'description': 'Twenty years after a fungal infection obliterated most of the U.S. population and turned the victims into infected monstrosities, Joel is tasked with escorting Ellie to the Fireflies to help reverse engineer a cure. However, this isnt easy for either of them, since Joel has been left almost permanently bitter after the death of his daughter, and Ellie is distrusting of him.',
    'published_place': 'USA',
    'title': 'The Last of Us',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMTkzMzk3MzYzMV5BMl5BanBnXkFtZTgwOTQzMDM2MTE@._V1_UY268_CR6,0,182,268_AL_.jpg',
    'url': 'https://www.imdb.com/title/tt2140553/',
  },
  {
    'id': '9R84q3YB85bvUe-qjdD_',
    'trailer': 'https://www.imdb.com/video/imdb/vi3351618073?playlistId=tt1523320',
    'cast': [
      'A.J. Hackett-Self',
      'Jeff Campbell-Self',
      'Allan Byrne-Self',
      'Ton Deken-Self',
      'Biggi Smithers-Self',
      'George Greenough-Self',
      'Clive Neeson-Clive Neeson',
    ],
    'creator': [
      'Clive Neeson',
    ],
    'star': '8.3',
    'release_date': '2018-08-01',
    'genres': [
      'Documentary',
      'Action',
      'Adventure',
      'History',
      'Sport',
    ],
    'description': 'In the beautiful wilderness of New Zealand a daredevil bunch of kids in the 60\'s experimented with something that would change the world of adventure travel. This is their global quest for adrenalin in 45 years of stunning original footage.',
    'runtime': 100,
    'published_place': 'USA',
    'title': 'Last Paradise',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMTMyOTY4MjA2MV5BMl5BanBnXkFtZTcwMDk1ODk3NA@@._V1_UY268_CR4,0,182,268_AL_.jpg',
    'url': 'https://www.imdb.com/title/tt1523320/',
  },
  {
    'id': 'SyJ8q3YB85bvUe-q0Ogr',
    'trailer': 'https://www.imdb.com/video/imdb/vi2007669529?playlistId=tt0097576',
    'cast': [
      'Harrison Ford-Indiana Jones',
      'Sean Connery-Professor Henry Jones',
      'Denholm Elliott-Marcus Brody',
      'Alison Doody-Elsa',
      'John RhysDavies-Sallah',
      'Julian Glover-Walter Donovan',
      'River Phoenix-Young Indy',
      'Michael Byrne-Vogel',
      'Kevork Malikyan-Kazim',
      'Robert Eddison-Grail Knight',
      'Richard Young-Fedora',
      'Alexei Sayle-Sultan',
      'Alex HydeWhite-Young Henry',
      'Paul Maxwell-Panama Hat',
      'Isla Blair-Mrs. Donovan',
    ],
    'creator': [
      'Steven Spielberg',
    ],
    'star': '8.2',
    'release_date': '1989-05-01',
    'genres': [
      'Action',
      'Adventure',
    ],
    'description': 'An art collector appeals to Indiana Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure of heart.',
    'runtime': 127,
    'published_place': 'USA',
    'title': 'Indiana Jones and the Last Crusade',
    'poster': 'https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    'url': 'https://www.imdb.com/title/tt0097576/',
  },
  {
    'id': 'zyJ8q3YB85bvUe-q5-mt',
    'trailer': 'https://www.imdb.com/video/imdb/vi4010411801?playlistId=tt0417299',
    'cast': [
      'Zach Tyler-Aang',
      'Mae Whitman-Katara',
      'Jack De Sena-Sokka',
      'Dee Bradley Baker-Appa',
      'Dante Basco-Prince Zuko',
      'Michaela Jill Murphy-Toph',
      'Mako-Uncle',
    ],
    'creator': [
      'Michael Dante DiMartino',
      'Bryan Konietzko',
    ],
    'star': '9.2',
    'release_date': '2005-02-01',
    'genres': [
      'Animation',
      'Action',
      'Adventure',
      'Family',
      'Fantasy',
      'Mystery',
    ],
    'description': 'The world is divided into four elemental nations: The Northern and Southern Water Tribes, the Earth Kingdom, the Fire Nation, and the Air Nomads. The Avatar upholds the balance between the nations, but everything changed when the Fire Nation invaded. Only the Avatar, master of all four elements, can stop them. But when the world needs him most, he vanishes. A hundred years later Katara and Sokka discover the new Avatar, an airbender named Aang. Together they must help Aang master the elements and save the world.',
    'runtime': 23,
    'published_place': 'USA',
    'title': 'Avatar: The Last Airbender',
    'poster': 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
    'url': 'https://www.imdb.com/title/tt0417299/',
  },
];

export default function Home() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Title level={3}>
            <Text>Movie</Text>
            <Text type="secondary">Search</Text>
          </Title>
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Phim bộ</Menu.Item>
          <Menu.Item key="2">Phim chiếu rạp</Menu.Item>
          <Menu.Item key="3">Top phim 2020</Menu.Item>
        </Menu>
      </Header>
      <Search
        placeholder="Tên phim"
        allowClear
        enterButton="Duyệt phim"
        size="large"
        onSearch={() => {
        }}
      />
      <div style={{ margin: '24px 200px 0' }}>
        <Row gutter={24}>
          <Col span={6}>
            <Form layout="vertical">
              <Form.Item label="Thể loại">
                <Select defaultValue="cction" onChange={() => {
                }}>
                  <Option value="drama">Chính kịch</Option>
                  <Option value="comedy">Phim hài</Option>
                  <Option value="documentary">Phim tài liệu</Option>
                  <Option value="cction">Phim hành động</Option>
                  <Option value="thriller">Phim kinh dị</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={6}>
            <Form layout="vertical">
              <Form.Item label="Năm phát hành">
                <Select defaultValue="all" onChange={() => {
                }}>
                  <Option value="all">Tất cả</Option>
                  <Option value="2016">2016</Option>
                  <Option value="2017">2017</Option>
                  <Option value="2018">2018</Option>
                  <Option value="2019">2019</Option>
                  <Option value="2020">2020</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={6}>
            <Form layout="vertical">
              <Form.Item label="Quốc gia">
                <Select defaultValue="usa" onChange={() => {
                }}>
                  <Option value="usa">Mỹ</Option>
                  <Option value="uk">Anh</Option>
                  <Option value="france">Pháp</Option>
                  <Option value="india">Ấn Độ</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={6}>
            <Form layout="vertical">
              <Form.Item label="Đánh giá">
                <Select defaultValue="usa" onChange={() => {
                }}>
                  <Option value="usa">Cực phê</Option>
                  <Option value="uk">Phê</Option>
                  <Option value="france">Hơi phê</Option>
                  <Option value="india">Rác</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <Content style={{ padding: '0 200px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0', margin: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Row gutter={40}>
              {data.map(item => (
                <Col span={6} style={{ marginBottom: '20px' }}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src={item.poster}
                      />
                    }
                  >
                    <Meta
                      title={item.title}
                      description={
                        <Moment format="LL">
                          {item.release_date}
                        </Moment>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}