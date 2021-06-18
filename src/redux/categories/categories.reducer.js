import { SET_CATEGORIES, SET_CATEGORIES_LOADING } from './categories.types';

const initialState = {
  list: [],
  loading: true
};

export const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        list: action.payload
      };
    case SET_CATEGORIES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
