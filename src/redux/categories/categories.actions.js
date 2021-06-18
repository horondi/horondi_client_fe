import { GET_CATEGORIES, SET_CATEGORIES, SET_CATEGORIES_LOADING } from './categories.types';

const setCategories = (newCategories) => ({
  type: SET_CATEGORIES,
  payload: newCategories
});

const getCategories = () => ({
  type: GET_CATEGORIES
});

const setCategoriesLoading = (loading) => ({
  type: SET_CATEGORIES_LOADING,
  payload: loading
});

export { setCategories, getCategories, setCategoriesLoading };
