import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { useStyles } from './wishlist-item.styles';
import { removeItemFromWishlist } from '../../../redux/wishlist/wishlist.actions';
import { WISHLIST_BUTTONS } from '../../../translations/wishlist.translations';
// import { addItemToCart } from '../../../redux/cart/cart.actions';

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  const onRemoveItem = () => dispatch(removeItemFromWishlist(item));
  const onAddToCart = () => dispatch();

  return (
    <tr className={styles.root}>
      <td className={styles.product}>
        <div className={styles.image}>
          <img src={item.image} alt='product pictures' />
        </div>
        <div className={styles.description}>
          <span className={styles.itemName}>{item.name[language].value}</span>
          <Button onClick={onAddToCart} variant='contained'>
            {WISHLIST_BUTTONS[language].toCart}
          </Button>
        </div>
      </td>
      <td className={styles.price}>
        <span>{item.totalPrice} UAH</span>
        <DeleteIcon className={styles.trash} onClick={onRemoveItem} />
      </td>
    </tr>
  );
};

export default WishlistItem;
