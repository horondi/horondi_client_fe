import {
  SET_CONSTRUCTOR_MODEL_BY_ID,
  SET_MODEL_FOR_CONSTRUCTOR,
  SET_MODEL_LOADING
} from './constructor-model.types';

export const initialState = {
  modelsForConstructor: '',
  currentModel: '',
  modelLoading: false
};

const constructorModel = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODEL_FOR_CONSTRUCTOR:
      return {
        ...state,
        modelsForConstructor: action.payload
      };
    case SET_CONSTRUCTOR_MODEL_BY_ID:
      return {
        ...state,
        currentModel: action.payload
      };
    case SET_MODEL_LOADING:
      return {
        ...state,
        modelLoading: action.payload
      };
    default:
      return state;
  }
};

export default constructorModel;
