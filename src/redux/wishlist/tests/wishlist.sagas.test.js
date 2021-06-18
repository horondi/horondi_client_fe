import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  handleWishlistLoad,
  handleAddWishlistItem,
  handleRemoveWishlistItem
} from '../wishlist.sagas';
import { SET_WISHLIST } from '../wishlist.types';
import { getFromLocalStorage, setToLocalStorage } from '../../../services/local-storage.service';
import { addItemToWishlist, removeItemFromWishlist } from '../wishlist.actions';

describe('Wishlist saga', () => {
  let products;
  let product;

  beforeEach(() => {
    product = { _id: 3, name: 'Lemon' };
    products = [
      { _id: 1, name: 'Apple' },
      { _id: 2, name: 'Watermelon' }
    ];
    setToLocalStorage('wishlist', products);
  });

  it.skip('fetching wishlist items from local storage and set to redux store', () =>
    expectSaga(handleWishlistLoad)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_WISHLIST,
        payload: products
      })
      .run());

  it.skip('fetching cart items from local storage and add new one', () => {
    const productToWishlist = addItemToWishlist(product);

    return expectSaga(handleAddWishlistItem, productToWishlist)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_WISHLIST,
        payload: [...products, product]
      })
      .run();
  });

  it.skip('should to remove product from cart by id', () => {
    const productToRemove = removeItemFromWishlist(products[0]);

    return expectSaga(handleRemoveWishlistItem, productToRemove)
      .provide([[matchers.call.fn(getFromLocalStorage), products]])
      .put({
        type: SET_WISHLIST,
        payload: [products[1]]
      })
      .run();
  });
});
