import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setUser,
  setUserError,
  setUserLoading,
  resetState,
  userHasRecovered,
  userHasRegistered,
  setUserIsChecked,
  setPasswordIsReset,
  setConfirmationEmailStatus,
  setUserIsConfirmed,
  setConfirmationLoading,
  setRecoveryLoading,
  setUserOrders
} from './user.actions';
import {
  LOGIN_USER,
  CONFIRM_USER,
  RECOVER_USER,
  PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID,
  REGISTER_USER,
  PRESERVE_USER,
  UPDATE_USER,
  SEND_CONFIRMATION_EMAIL,
  GET_USER_ORDERS
} from './user.types';
import getItems, { setItems } from '../../utils/client';
import { REDIRECT_TIMEOUT } from '../../configs/index';
import { setToLocalStorage } from '../../services/local-storage.service';

export const loginUser = (data) => {
  const query = `
  mutation login($user: LoginInput!){
  loginUser(
    loginInput: $user
  ) {
    purchasedProducts
    orders
    token
    _id
    email
    firstName
    lastName
    phoneNumber
    confirmed
    images {
      thumbnail
    }
    address {
      country
      city
      street
      buildingNumber
      appartment
      region
      zipcode
		}
		wishlist {
			_id
			name {
				lang
				value
			}
			basePrice {
				currency
				value
			}
		}
  }
}
  `;
  return setItems(query, data);
};

export const resetPassword = (data) => {
  const query = `
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `;
  return setItems(query, data);
};

export function* handleUserLoad({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(loginUser, payload);
    yield put(setUser(user.data.loginUser));
    yield setToLocalStorage('accessToken', user.data.loginUser.token);
    yield put(setUserLoading(false));
    yield put(push('/'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserConfirm({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
  mutation confirmUser($token: String!){
    confirmUserEmail(token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(setUserIsConfirmed(true));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserRecovery({ payload }) {
  try {
    yield put(resetState());
    yield put(setRecoveryLoading(true));
    yield call(
      setItems,
      `
  mutation recovery($email: String!, $language: Int!){
    recoverUser(email: $email, language: $language)
  }
  `,
      payload
    );
    yield put(setRecoveryLoading(false));
    yield put(userHasRecovered(true));
    if (payload.redirect) {
      yield delay(REDIRECT_TIMEOUT);
      yield put(push('/login'));
    }
  } catch (error) {
    yield put(setRecoveryLoading(false));
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handlePasswordReset({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(setPasswordIsReset(true));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleTokenCheck({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
  mutation checkToken($token: String!){
    checkIfTokenIsValid(token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export function* handleUserRegister({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
      mutation register($user: userRegisterInput!, $language: Int!){
        registerUser(
          user: $user
          language: $language
        ) {
          email
        }
        }
      `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(userHasRegistered(true));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserPreserve() {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(
      getItems,
      `query {
      getUserByToken {
        ... on User {
        purchasedProducts
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        images {
          thumbnail
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          zipcode
          region
        }
				confirmed
				wishlist {
					_id
					name {
						lang
						value
					}
					basePrice {
						currency
						value
					}
				}
        }
        ... on Error {
          statusCode
          message
        }
      }
    }`
    );
    if (
      user.data.getUserByToken.statusCode >= 400 ||
      !user.data.getUserByToken
    ) {
      yield setToLocalStorage('accessToken', null);
    } else {
      yield put(setUser(user.data.getUserByToken));
    }
  } catch (error) {
    yield setToLocalStorage('accessToken', null);
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  } finally {
    yield put(setUserIsChecked(true));
    yield put(setUserLoading(false));
  }
}

export function* handleUpdateUser({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(
      setItems,
      `
     mutation updateUser($user: UserInput!, $id: ID!, $upload: Upload){
      updateUserById(user: $user, id: $id, upload: $upload) {
        purchasedProducts
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        confirmed
        images {
          thumbnail
          large
          small
          medium
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          region
          zipcode
        }
        confirmed
      }
    }
  `,
      payload
    );
    yield put(setUser(user.data.updateUserById));
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export function* handleSendConfirmation({ payload }) {
  try {
    yield put(resetState());
    yield put(setConfirmationLoading(true));
    yield call(
      setItems,
      `
     mutation sendConfirmation($email: String!, $language: Int!){
      sendEmailConfirmation(email: $email, language: $language)
    }
  `,
      payload
    );
    yield put(setConfirmationLoading(false));
    yield put(setConfirmationEmailStatus(true));
  } catch (e) {
    yield put(setConfirmationLoading(false));
    yield put(setUserError(e.message.replace('GraphQL error: ', '')));
  }
}

export function* handleGetUserOrders() {
  try {
    yield put(setUserLoading(true));
    const res = yield call(
      getItems,
      `
       {
        getUserOrders {
          _id
          dateOfCreation
          status
          items {
            name {
              value
            }
            bottomMaterial{
              value
            }
            quantity
            actualPrice {
              value
              currency
            }
          }
          totalItemsPrice {
            value
            currency
          }
        }
      }
    `
    );
    yield put(setUserOrders(res.data.getUserOrders));
    yield put(setUserLoading(false));
  } catch (e) {
    yield put(setUserError(e.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
  yield takeEvery(CONFIRM_USER, handleUserConfirm);
  yield takeEvery(RECOVER_USER, handleUserRecovery);
  yield takeEvery(PASSWORD_RESET, handlePasswordReset);
  yield takeEvery(CHECK_IF_TOKEN_VALID, handleTokenCheck);
  yield takeEvery(REGISTER_USER, handleUserRegister);
  yield takeEvery(PRESERVE_USER, handleUserPreserve);
  yield takeEvery(UPDATE_USER, handleUpdateUser);
  yield takeEvery(SEND_CONFIRMATION_EMAIL, handleSendConfirmation);
  yield takeEvery(GET_USER_ORDERS, handleGetUserOrders);
}
