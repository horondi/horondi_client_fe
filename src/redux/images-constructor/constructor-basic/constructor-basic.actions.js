import { GET_CONSTRUCTOR_BASIC, SET_CONSTRUCTOR_BASIC } from './constructor-basic.types';

const getConstructorBasic = (payload) => ({
  type: GET_CONSTRUCTOR_BASIC,
  payload
});

const setConstructorBasic = (payload) => ({
  type: SET_CONSTRUCTOR_BASIC,
  payload
});

export { getConstructorBasic, setConstructorBasic };
