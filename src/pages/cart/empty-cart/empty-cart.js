import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-cart.styles';
import {
  CART_TITTLES,
  CART_BUTTONS
} from '../../../translations/cart.translations';
import { CART_IMAGES } from '../../../configs';

const EmptyCart = () => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));
  const styles = useStyles();
  const emptyCartImgLink = isLightTheme
    ? CART_IMAGES.lightTheme
    : CART_IMAGES.darkTheme;

  return (
    <div className={styles.root} data-cy='empty-cart'>
      <Typography variant='h2'>{CART_TITTLES[language].empty}</Typography>
      <img src={emptyCartImgLink} alt='empty cart' />
      <Link to='/'>
        <Button className={styles.button} variant='contained'>
          {CART_BUTTONS[language].empty}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;