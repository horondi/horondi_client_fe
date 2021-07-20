import React, { useLayoutEffect, useState } from 'react';
import { AppBar, IconButton as BurgerMenu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useStyles } from './app-header.styles';
import Sidebar from '../../containers/sidebar';
import HeaderRightBar from '../../containers/header-right-bar';

import { LOGO } from '../../configs';

const AppHeader = () => {
  const styles = useStyles();
  const [sticky, setSticky] = useState(false);
  const Header = clsx({
    [styles.header]: true,
    [styles.sticky]: sticky
  });
  const Headerblock = clsx({
    [styles.Headerblock]: true,
    [styles.Headerblocksticky]: sticky
  });
  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      <AppBar position='static' className={Header}>
        <Toolbar className={Headerblock}>
          <BurgerMenu className={styles.menuButton} onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </BurgerMenu>
          <Typography variant='h5'>
            <Link to='/' className={styles.logo}>
              {LOGO}
            </Link>
          </Typography>
          <HeaderRightBar />
        </Toolbar>
      </AppBar>
      <div className={styles.headerspace} />
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default AppHeader;
