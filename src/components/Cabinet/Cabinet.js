import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './Cabinet.styles';
import { setThemeMode } from '../../redux/theme/theme.actions';
import {
  CABINET_OPTIONS_LOGGED,
  CABINET_OPTIONS_NOT_LOGGED
} from '../../configs';

const Cabinet = () => {
  const { lightMode, language } = useSelector(
    ({ theme: { lightMode }, language: { language } }) => ({
      lightMode,
      language
    })
  );
  const dispatch = useDispatch();
  const isLogged = false;
  const props = {
    logged: isLogged
  };

  const classes = useStyles(props);
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

  const changeTheme = () => {
    dispatch(setThemeMode(!lightMode));
  };

  const loggedCabinet = () => (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <Link to='/profile' className={classes.link}>
          <PersonOutlineIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].profile}</span>
        </Link>
      </li>
      <li>
        <Link to='/wishlist' className={classes.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={classes.link}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].logOut}</span>
        </Link>
      </li>
    </ul>
  );

  const notLoggedCabinet = () => (
    <ul className={classes.cabinetDropdownList}>
      <li>
        <Link to='/wishlist' className={classes.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={changeTheme}>
        {themeIcon}
        <span>{CABINET_OPTIONS_NOT_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={classes.link}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_NOT_LOGGED[language].logIn}</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <div className={classes.cabinet}>
      <PersonOutlineIcon />
      {isLogged ? loggedCabinet() : notLoggedCabinet()}
    </div>
  );
};

export default Cabinet;
