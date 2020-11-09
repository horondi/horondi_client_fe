import { all } from 'redux-saga/effects';

import newsSaga from './news/news.sagas';
import categoriesSaga from './categories/categories.sagas';
import productsSaga from './products/products.sagas';
import wishlistSaga from './wishlist/wishlist.sagas';
import cartSaga from './cart/cart.sagas';
import userSaga from './user/user.sagas';
import businessPagesSaga from './business-pages/business-pages.sagas';
import contactsSaga from './contacts/contacts.sagas';
import modelSaga from './model/model.sagas';
import commentsSaga from './comments/comments.sagas';
import checkoutSaga from './checkout/checkout.sagas';
import chatSaga from './chat/chat.sagas';
import headerLinksSaga from './header-links/header-links.sagas';
import homeLooksImagesSaga from './home-page-looks/home-page-looks.sagas';

export default function* rootSaga() {
  yield all([
    newsSaga(),
    categoriesSaga(),
    userSaga(),
    wishlistSaga(),
    contactsSaga(),
    productsSaga(),
    cartSaga(),
    modelSaga(),
    commentsSaga(),
    checkoutSaga(),
    businessPagesSaga(),
    chatSaga(),
    headerLinksSaga(),
    homeLooksImagesSaga()
  ]);
}
