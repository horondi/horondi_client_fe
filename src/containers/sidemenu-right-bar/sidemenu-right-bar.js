import React from 'react';
import { useStyles } from './sidemenu-right-bar.styles';

import Currency from '../currency';
import Language from '../language';
import CartHeader from '../cart-header';
import HeaderProfile from '../header-profile';
import SearchBar from '../search-bar';

const SidemenuRightBar = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });

  return (
    <div className={styles.root}>
      <SearchBar fromSideBar={fromSideBar} />
      <div className={styles.currency}>
        <Currency fromSideBar={fromSideBar} />
      </div>
      <div className={styles.language}>
        <Language fromSideBar={fromSideBar} />
      </div>
      <div className={styles.cartHeader}>
        <CartHeader fromSideBar={fromSideBar} />
      </div>
      <div className={styles.headerProfile}>
        <HeaderProfile fromSideBar={fromSideBar} />
      </div>
    </div>
  );
};

export default SidemenuRightBar;
