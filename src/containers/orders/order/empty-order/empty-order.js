import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStyles } from './empty-order.styles';
import { CART_IMAGES } from '../../../../configs';

const EmptyOrder = ({ title, buttonTitle, name }) => {
  const { isLightTheme } = useSelector(({ Theme }) => ({
    isLightTheme: Theme.lightMode
  }));
  const styles = useStyles();
  const emptyOrderImgLink = isLightTheme ? CART_IMAGES.lightTheme : CART_IMAGES.darkTheme;

  return (
    <div className={styles.root} data-cy={name}>
      <Typography variant='h2'>{title}</Typography>
      <img src={emptyOrderImgLink} alt={name} />
      <Link to='/backpacks/rolltop'>
        <Button className={styles.button} variant='contained'>
          {buttonTitle}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyOrder;
