import { newsReducer } from '../news.reducer';
import { setNews, setArticle, setLoading } from '../news.actions';

describe('News reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: true,
      list: [],
      activeArticle: null
    };
  });

  const newsExample = [
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

  const articleExample = {
    author: {
      image: 'someImage.jpeg',
      name: 'Author Name'
    },
    date: '154568794567',
    title: 'Test title',
    text: 'Test text'
  };

  it('should return default state', () => {
    expect(newsReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with news', () => {
    const state = {
      loading: true,
      list: newsExample,
      activeArticle: null
    };

    expect(newsReducer(state, setNews(newsExample))).toEqual(state);
  });

  it('should return state with activeArticle', () => {
    const state = {
      loading: true,
      list: [],
      activeArticle: articleExample
    };

    expect(newsReducer(initialState, setArticle(articleExample))).toEqual(state);
  });

  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(newsReducer(initialState, setLoading(false))).toEqual(state);
  });
  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(newsReducer(initialState, setLoading(true))).toEqual(state);
  });
});
