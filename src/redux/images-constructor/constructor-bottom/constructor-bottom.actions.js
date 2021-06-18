import { GET_CONSTRUCTOR_BOTTOM, SET_CONSTRUCTOR_BOTTOM } from './constructor-bottom.types';

const getConstructorBottom = (payload) => ({
  type: GET_CONSTRUCTOR_BOTTOM,
  payload
});

const setConstructorBottom = (payload) => ({
  type: SET_CONSTRUCTOR_BOTTOM,
  payload
});

export { getConstructorBottom, setConstructorBottom };
