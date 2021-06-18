import { GET_NEWS, SET_NEWS, GET_NEWS_ARTICLE, SET_NEWS_ARTICLE, SET_LOADING } from './news.types';

const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
});

const getNews = () => ({
  type: GET_NEWS
});

const setArticle = (article) => ({
  type: SET_NEWS_ARTICLE,
  payload: article
});

const getArticle = (id) => ({
  type: GET_NEWS_ARTICLE,
  payload: id
});

const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

export { setArticle, getArticle, setNews, getNews, setLoading };
