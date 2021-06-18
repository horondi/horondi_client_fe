import { CHANGE_LANGUAGE } from './language.types';
import { DEFAULT_LANGUAGE } from '../../configs';

export const initialState = {
  language: DEFAULT_LANGUAGE
};

const languageReducer = (state = initialState, action = {}) => {
  if (action.type === CHANGE_LANGUAGE) {
    return {
      ...state,
      language: action.payload
    };
  }
  return state;
};

export default languageReducer;
