import { setArticle, getArticle, setNews, getNews, setLoading } from '../news.actions';
import { GET_NEWS, SET_NEWS, GET_NEWS_ARTICLE, SET_NEWS_ARTICLE, SET_LOADING } from '../news.types';

describe('News actions test', () => {
  it('should set all news to payload property', () => {
    const news = [
      {
        author: {
          image: 'someImage.jpeg',
          name: 'Author Name'
        },
        date: '154568794567',
        title: 'Test title',
        text: 'Test text'
      },
      {
        author: {
          image: 'otherImage.jpeg',
          name: 'Second Author Name'
        },
        date: '154568794567',
        title: 'Second Test title',
        text: 'Second Test text'
      }
    ];
    const result = {
      type: SET_NEWS,
      payload: news
    };

    expect(setNews(news)).toEqual(result);
  });

  it('should return all news', () => {
    const result = {
      type: GET_NEWS
    };

    expect(getNews()).toEqual(result);
  });
});

describe('NewsDetail actions test', () => {
  it('should set article to payload property', () => {
    const article = {
      author: {
        image: 'someImage.jpeg',
        name: 'Author Name'
      },
      date: '154568794567',
      title: 'Test title',
      text: 'Test text'
    };
    const result = {
      type: SET_NEWS_ARTICLE,
      payload: article
    };

    expect(setArticle(article)).toEqual(result);
  });

  it('should return one Article', () => {
    const result = {
      type: GET_NEWS_ARTICLE
    };

    expect(getArticle()).toEqual(result);
  });
});

describe('loading action', () => {
  test('should return loading = true', () => {
    expect(setLoading(true)).toEqual({
      type: SET_LOADING,
      payload: true
    });
  });
  test('should return loading = false', () => {
    expect(setLoading(false)).toEqual({
      type: SET_LOADING,
      payload: false
    });
  });
});
