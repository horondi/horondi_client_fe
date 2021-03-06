import {
  SET_LOADING,
  SET_ORDER,
  SET_IS_ORDER_CREATED,
} from "./order.types";

export const setOrder = payload => ({
  type: SET_ORDER,
  payload
});
export const setOrderLoading = payload => ({
  type: SET_LOADING,
  payload
});
export const setIsOrderCreated = payload => ({
  type: SET_IS_ORDER_CREATED,
  payload
});
