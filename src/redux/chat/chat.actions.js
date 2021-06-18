import { SET_CHAT_LOADING, SEND_CHAT_MAIL, SET_MESSAGE_STATE } from './chat.types';

export const sendEmail = (objToSend) => ({
  type: SEND_CHAT_MAIL,
  payload: objToSend
});

export const setCommentsLoading = (payload) => ({
  type: SET_CHAT_LOADING,
  payload
});

export const setMessageState = (payload) => ({
  type: SET_MESSAGE_STATE,
  payload: !!payload
});
