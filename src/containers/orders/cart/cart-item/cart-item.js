import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import { useStyles } from './cart-item.styles';
import { CART_TABLE_FIELDS } from '../../../../translations/cart.translations';
import NumberInput from '../../../../components/number-input';
import {
  setCartItemQuantity,
  changeCartItemUserQuantity,
  deleteProductFromUserCart,
  removeItemFromCart
} from '../../../../redux/cart/cart.actions';
import { IMG_URL } from '../../../../configs';
import { MATERIAL_UI_COLOR } from '../../../../const/material-ui';
import { onChangeQuantityHandler } from '../../../../utils/cart';
import { getCurrencySign } from '../../../../utils/currency';
import routes from '../../../../const/routes';

const { pathToProducts } = routes;

const CartItem = ({ item, language, currency, calcPrice, user, cartQuantityLoading }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [inputValue, setInputValue] = useState(item.quantity);
  const currencySign = getCurrencySign(currency);

  const onChangeUserQuantity = useCallback(
    _.debounce((value) => {
      dispatch(changeCartItemUserQuantity({ item, value, userId: user._id }));
    }, 500),
    [dispatch, changeCartItemUserQuantity]
  );

  const onChangeQuantity = (value) => dispatch(setCartItemQuantity(item, +value));

  const onDeleteItem = () => {
    if (user) {
      dispatch(deleteProductFromUserCart({ userId: user._id, items: item }));
    } else {
      dispatch(removeItemFromCart(item));
    }
  };

  return (
    <TableRow classes={{ root: styles.root }} data-cy='cart-item'>
      <TableCell data-cy='cart-item-img'>
        <Link to={`${pathToProducts}/${item.product._id}`}>
          <img
            className={styles.itemImg}
            src={`${IMG_URL}${item.product.images.primary.thumbnail} `}
            alt='product-img'
          />
        </Link>
      </TableCell>
      <TableCell classes={{ root: styles.description }} data-cy='cart-item-description'>
        <Link to={`${pathToProducts}/${item.product._id}`}>
          <span className={styles.itemName}>{item.product.name[language].value}</span>
        </Link>
        {item.options.size && (
          <div>
            {CART_TABLE_FIELDS[language].size}: {item.options.size.name}
          </div>
        )}
        {item.product.bottomMaterial && (
          <div>
            {CART_TABLE_FIELDS[language].bottomMaterial}:
            <br />
            {item.product.bottomMaterial.material.name[language].value}
          </div>
        )}
      </TableCell>
      <TableCell className={styles.quantityWrapper}>
        {!cartQuantityLoading ? (
          <NumberInput
            quantity={inputValue}
            onChangeQuantity={onChangeQuantityHandler(user, onChangeUserQuantity, onChangeQuantity)}
            setInputValue={setInputValue}
          />
        ) : (
          <span className={styles.loadingBar}>
            <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={30} />
          </span>
        )}
      </TableCell>
      <TableCell classes={{ root: styles.price }}>
        <div className={styles.priceWrapper}>
          {user && (
            <div>
              {Math.round(item.price[currency].value / 100)}
              {'\u00A0'}
              <FontAwesomeIcon icon={currencySign} />
            </div>
          )}
          {!user && (
            <div>
              {Math.round(calcPrice(item, currency) / 100)}
              {'\u00A0'}
              <FontAwesomeIcon icon={currencySign} />
            </div>
          )}
        </div>
      </TableCell>
      <TableCell classes={{ root: styles.delete }}>
        <span className={styles.deleteIcon}>
          <DeleteIcon onClick={onDeleteItem} fontSize='default' />
        </span>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
