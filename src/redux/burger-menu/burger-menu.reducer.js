import { SET_BURGER_MENU_LINKS, SET_BURGER_MENU_LOADING_LINKS } from './burger-menu.types';

export const initialState = {
  categories: [],
  loading: true
};

const burgerMenuReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BURGER_MENU_LINKS:
      return {
        ...state,
        categories: action.payload
      };
    case SET_BURGER_MENU_LOADING_LINKS:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default burgerMenuReducer;
