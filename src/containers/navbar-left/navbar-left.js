import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './navbar-left.styles';
import { getAllHeaderLinks } from '../../redux/header-links/header-links.actions';
import { LOGO, moreHeaderButton } from '../../configs';

const NavbarLeft = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHeaderLinks());
  }, [dispatch]);

  const { linksList, language } = useSelector(({ HeaderLinks, Language }) => ({
    linksList: HeaderLinks.linksList,
    language: Language.language
  }));

  const styles = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navbarList = linksList
    ? linksList
      .filter(({ priority }) => priority <= 3)
      .map(({ _id, title, link }) => (
        <Link key={_id} className={styles.link} to={link}>
          {title[language].value}
        </Link>
      ))
    : null;

  const moreDropDownList =
    linksList.length > 3
      ? linksList
        .filter(({ priority }) => priority > 3)
        .map(({ _id, title, link }) => (
          <MenuItem key={_id} className={styles.moreItem} onClick={handleClose}>
            <Link to={link} className={styles.moreItemLink}>
              {title[language].value}
            </Link>
          </MenuItem>
        ))
      : null;

  return (
    <Toolbar>
      <Typography variant='h6'>
        <Link to='/' className={styles.logo}>
          {LOGO}
        </Link>
      </Typography>
      {navbarList}
      {!!moreDropDownList && (
        <div>
          <div
            aria-controls='customized-menu'
            aria-haspopup='true'
            className={styles.link}
            onClick={handleClick}
          >
            {moreHeaderButton[language].value}
          </div>
          <Menu
            className={styles.menu}
            anchorEl={anchorEl}
            keepMounted
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {moreDropDownList}
          </Menu>
        </div>
      )}
    </Toolbar>
  );
};

export default NavbarLeft;
