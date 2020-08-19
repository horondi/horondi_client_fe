import { takeEvery, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setAllProducts,
  setProductsLoading,
  setAllFilterData,
  setPagesCount
} from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_ALL_FILTERS, GET_FILTRED_PRODUCTS } from './products.types';

export function* handleFilterLoad() {
  try {
    yield put(setProductsLoading(true));
    const state = yield select((state) => state.Products);
    const products = yield call(
      getItems,
      `query(
        $search: String
        $price: [Int]
        $colors: [String]
        $patterns: [String]
        $isHotItem: Boolean
        $skip:Int
        $limit:Int
        $rate:Int
        $basePrice:Int
        $purchasedCount:Int
        $category:[String]
        ){
          getProducts(
            filter: {
              colors: $colors
              pattern: $patterns
              price: $price
              category:$category
              isHotItem: $isHotItem
            }
            skip: $skip
            limit: $limit
            search: $search
            sort:{ 
              rate: $rate,
              basePrice: $basePrice,
              purchasedCount:$purchasedCount
            }
            ){
              items{
                _id
                purchasedCount
                name {
                  lang
                  value
                }
                basePrice
                rate
                images {
                  primary {
                    medium
                  }
                }
                colors{
                  name {
                    lang
                    value
                  }
                  simpleName {
                    lang
                    value
                  }
                }
                pattern {
                  lang
                  value
                }
                category {
                  _id
                  name {
                    value
                  }
                  isMain
                }
                isHotItem
              }
              count
            }
          }`,
      {
        search: state.filters.searchFilter,
        colors: state.filters.colorsFilter,
        patterns: state.filters.patternsFilter,
        price: state.filters.priceFilter,
        skip: state.currentPage * state.productsPerPage,
        limit: state.productsPerPage,
        rate: state.sortByRate || undefined,
        basePrice: state.sortByPrice || undefined,
        category: state.filters.categoryFilter,
        purchasedCount: state.sortByPopularity || undefined,
        isHotItem: state.filters.isHotItemFilter
      }
    );
    yield put(
      setPagesCount(
        Math.ceil(products.data.getProducts.count / state.productsPerPage)
      )
    );
    yield put(setAllProducts(products.data.getProducts.items));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleGetFilters() {
  try {
    yield put(setProductsLoading(true));
    const filter = yield call(
      getItems,
      `query{
        getProducts {
          items{
            colors {
              name {
                value
              }
              simpleName {
                value
              }
            }
            basePrice
            pattern {
              value
            }
            category {
              _id
              name {
                value
              }
              isMain
            }
          }
        }
      }`
    );

    yield put(setAllFilterData(filter.data.getProducts.items));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors(e) {
  yield put(setProductsLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* productsSaga() {
  yield takeEvery(GET_ALL_FILTERS, handleGetFilters);
  yield takeEvery(GET_FILTRED_PRODUCTS, handleFilterLoad);
}