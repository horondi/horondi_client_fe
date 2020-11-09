import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { history } from '../store/store';

import { useStyles } from './routes.style.js';
import NewsPage from '../pages/news/news-page';
import Home from '../pages/home';
import ProductDetails from '../pages/product-details';
import AboutUs from '../pages/about-us';
import PaymentsAndShipping from '../pages/payments-and-shipping';
import PrivacyPolicy from '../pages/privacy-policy';
import Cart from '../pages/cart';
import Wishlist from '../pages/wishlist';
import NewsDetail from '../pages/news/news-detail';
import AppHeader from '../components/app-header';
import AppFooter from '../components/app-footer';
import ProductListPage from '../pages/product-list-page';
import Register from '../pages/register';
import Login from '../pages/login';
import Confirmation from '../pages/confirmation';
import Recovery from '../pages/recovery';
import NewPassword from '../pages/new-password';
import ErrorPage from '../pages/error-page';
import ThanksPage from '../pages/thanks-page';
import Contacts from '../pages/contacts';
import ProductsCarousel from '../pages/products-carousel';
import Checkout from '../containers/checkout';
import ProfilePage from '../pages/profile-page';
import OrderHistory from '../pages/order-history';
import ProtectedRoute from '../components/protected-route';
import Materials from '../pages/materials';

const Routes = () => {
  const styles = useStyles();

  const { categories, userData, userIsChecked } = useSelector(
    ({ Categories, User }) => ({
      categories: Categories.list,
      userIsChecked: User.userIsChecked,
      userData: User.userData
    })
  );

  return (
    <ConnectedRouter history={history}>
      <AppHeader />
      <div className={styles.root}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/error-page' exact component={ErrorPage} />
          <Route path='/news' exact component={NewsPage} />
          <Route path='/news/:id' exact component={NewsDetail} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/materials' exact component={Materials} />
          <Route
            path='/payment-and-shipping'
            exact
            component={PaymentsAndShipping}
          />
          <Route path='/privacy-policy' exact component={PrivacyPolicy} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/contacts' exact component={Contacts} />
          <ProtectedRoute
            path='/login'
            exact
            component={Login}
            isAuthed={!userData}
            redirectTo='/'
          />
          <ProtectedRoute
            path='/register'
            exact
            component={Register}
            isAuthed={!userData}
            redirectTo='/'
          />
          <Route path='/thanks' exact component={ThanksPage} />
          <Route path='/checkout' exact component={Checkout} />
          <Route
            path='/confirmation/:token'
            exact
            render={({ match }) => <Confirmation token={match.params.token} />}
          />
          <Route path='/recovery' exact component={Recovery} />
          <Route
            path='/recovery/:token'
            exact
            render={({ match }) => <NewPassword token={match.params.token} />}
          />
          <ProtectedRoute
            component={ProfilePage}
            path='/profile'
            isAuthed={userIsChecked && userData}
            exact
            redirectTo='/login'
          />
          <ProtectedRoute
            component={OrderHistory}
            path='/order-history'
            isAuthed={userIsChecked && userData}
            exact
            redirectTo='/login'
          />
          <Route
            path='/:category'
            exact
            render={({ match }) => {
              const { category } = match.params;
              const categoryParam = categories.find(
                (categoryFound) =>
                  categoryFound.name[1].value.toLowerCase() ===
                    category.toLowerCase() && categoryFound.isMain
              );
              return <ProductsCarousel category={categoryParam} />;
            }}
          />
          <Route path='/product/:id' exact component={ProductDetails} />
          <Route
            path='/:category/:model'
            exact
            render={({ match }) => {
              const { category, model } = match.params;
              const categoryParam = categories.find(
                (categoryFound) =>
                  categoryFound.name[1].value.toLowerCase() ===
                    category.toLowerCase() && categoryFound.isMain
              );
              return <ProductListPage category={categoryParam} model={model} />;
            }}
          />
        </Switch>
      </div>
      <AppFooter />
    </ConnectedRouter>
  );
};

export default Routes;
