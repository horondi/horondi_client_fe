import { GET_CONSTRUCTOR_PATTERN, SET_CONSTRUCTOR_PATTERN } from './constructor-pattern.types';

const getConstructorPattern = (payload) => ({
  type: GET_CONSTRUCTOR_PATTERN,
  payload
});

const setConstructorPattern = (payload) => ({
  type: SET_CONSTRUCTOR_PATTERN,
  payload
});

export { getConstructorPattern, setConstructorPattern };
