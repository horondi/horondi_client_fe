import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './logged-cabinet.styles';
import { setToLocalStorage } from '../../services/local-storage.service';
import { CABINET_OPTIONS_LOGGED } from '../../translations/cabinet.translations';
import { setUser } from '../../redux/user/user.actions';

const LoggedCabinet = ({ onChangeTheme }) => {
  const { lightMode, language } = useSelector(({ Theme, Language }) => ({
    lightMode: Theme.lightMode,
    language: Language.language
  }));

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    setToLocalStorage('accessToken', null);
  };
  const themeIcon = lightMode ? <Brightness7Icon /> : <Brightness4Icon />;
  const styles = useStyles();

  return (
    <ul className={styles.cabinetDropdownList} data-cy='cabinet-dropdown'>
      <li>
        <Link to='/profile' className={styles.link}>
          <PersonOutlineIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].profile}</span>
        </Link>
      </li>
      <li>
        <Link to='/order-history' className={styles.link}>
          <HistoryIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].orderHistory}</span>
        </Link>
      </li>
      <li>
        <Link to='/wishlist' className={styles.link}>
          <FavoriteIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].wishlist}</span>
        </Link>
      </li>
      <li onClick={onChangeTheme} onKeyDown={onChangeTheme} tabIndex={0}>
        {themeIcon}
        <span>{CABINET_OPTIONS_LOGGED[language].changeTheme}</span>
      </li>
      <li>
        <Link to='/login' className={styles.link} onClick={handleLogout}>
          <ExitToAppIcon />
          <span>{CABINET_OPTIONS_LOGGED[language].logOut}</span>
        </Link>
      </li>
    </ul>
  );
};

export default LoggedCabinet;
