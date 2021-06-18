import { SET_MODELS, SET_MODELS_LOADING } from './model.types';

export const initialState = {
  models: [],
  loading: false
};

const modelReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODELS:
      return {
        ...state,
        models: action.payload
      };
    case SET_MODELS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default modelReducer;
