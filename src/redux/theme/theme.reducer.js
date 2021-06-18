import { SET_FILTER_MENU_STATUS, SET_THEME_MODE } from './theme.types';

const initialState = {
  lightMode: true,
  filterMenuStatus: false
};

export const themeState = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_THEME_MODE:
      return {
        ...state,
        lightMode: payload
      };
    case SET_FILTER_MENU_STATUS:
      return {
        ...state,
        filterMenuStatus: payload
      };
    default:
      return state;
  }
};
