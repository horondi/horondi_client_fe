import {
  LOGIN_USER,
  SET_USER,
  LOGOUT_USER,
  SET_USER_ERROR,
  SET_USER_LOADING,
  CONFIRM_USER,
  STATE_RESET,
  RECOVER_USER,
  SET_USER_RECOVERED,
  PASSWORD_RESET,
  SET_PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID
} from './user.types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
});

const confirmUser = (payload) => ({
  type: CONFIRM_USER,
  payload
});

const setUserError = (error) => ({
  type: SET_USER_ERROR,
  payload: error
});

const logoutUser = () => ({
  type: LOGOUT_USER
});

const setUserLoading = (payload) => ({
  type: SET_USER_LOADING,
  payload
});

const resetState = () => ({
  type: STATE_RESET
});

const recoverUser = (payload) => ({
  type: RECOVER_USER,
  payload
});

const setUserRecovered = (payload) => ({
  type: SET_USER_RECOVERED,
  payload
});

const resetPassword = (payload) => ({
  type: PASSWORD_RESET,
  payload
});

const setPasswordReset = (payload) => ({
  type: SET_PASSWORD_RESET,
  payload
});

const checkIfTokenValid = (payload) => ({
  type: CHECK_IF_TOKEN_VALID,
  payload
});

export {
  loginUser,
  setUser,
  setUserError,
  logoutUser,
  setUserLoading,
  confirmUser,
  resetState,
  recoverUser,
  setUserRecovered,
  resetPassword,
  setPasswordReset,
  checkIfTokenValid
};
