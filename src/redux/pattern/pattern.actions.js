import { GET_PATTERNS, SET_PATTERNS, SET_PATTERN_LOADING } from './pattern.types';

export const setPatterns = (payload) => ({
  type: SET_PATTERNS,
  payload
});

export const getPatterns = (payload) => ({
  type: GET_PATTERNS,
  payload
});

export const setPatternLoading = (payload) => ({
  type: SET_PATTERN_LOADING,
  payload
});
