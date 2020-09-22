import { call, put, takeEvery } from 'redux-saga/effects';

import { push } from 'connected-react-router';
import {
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setLoading
} from './checkout.actions';
import {
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES
} from './checkout.types';
import getItems from '../../utils/client';
import { setError } from '../error/error.actions';

export function* handleCities({ payload }) {
  try {
    yield put(setLoading(true));

    const cities = yield call(
      getItems,
      `query{
      getNovaPoshtaCities(city: "${payload}") {
         description
         ref
         }
      }`
    );
    yield put(setNovaPoshtaCities(cities.data.getNovaPoshtaCities));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleWarehouse({ payload }) {
  try {
    const warehouses = yield call(
      getItems,
      `query{
                getNovaPoshtaWarehouses(city: "${payload}"){   
                    description
                    ref
                    shortAddress
                }
            }`
    );
    yield put(setNovaPoshtaWarehouse(warehouses.data.getNovaPoshtaWarehouses));
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* checkoutSaga() {
  yield takeEvery(GET_NOVAPOSHTA_CITIES, handleCities);
  yield takeEvery(GET_NOVAPOSHTA_WAREHOUSES, handleWarehouse);
}