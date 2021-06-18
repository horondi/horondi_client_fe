import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-wishlist.styles';
import { WISHLIST_TITTLES, WISHLIST_BUTTONS } from '../../../translations/wishlist.translations';
import { WISHLIST_IMAGES } from '../../../configs';

const EmptyWishlist = () => {
  const { language, isLightTheme } = useSelector(({ Language, Theme }) => ({
    language: Language.language,
    isLightTheme: Theme.lightMode
  }));
  const styles = useStyles();
  const emptyWishlistImgLink = isLightTheme
    ? WISHLIST_IMAGES.lightTheme
    : WISHLIST_IMAGES.darkTheme;

  return (
    <div className={styles.root} data-cy='empty-wishlist'>
      <Typography variant='h2'>{WISHLIST_TITTLES[language].empty}</Typography>
      <img src={emptyWishlistImgLink} alt='empty wishlist' />
      <Link to='/'>
        <Button className={styles.button} variant='contained'>
          {WISHLIST_BUTTONS[language].empty}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyWishlist;
