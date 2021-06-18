import {
  GET_BURGER_MENU_LINKS,
  SET_BURGER_MENU_LINKS,
  SET_BURGER_MENU_LOADING_LINKS
} from './burger-menu.types';

const setBurgerMenuLinks = (newBurgerMenu) => ({
  type: SET_BURGER_MENU_LINKS,
  payload: newBurgerMenu
});

const getBurgerMenuLinks = () => ({
  type: GET_BURGER_MENU_LINKS
});

const setBurgerMenuLoadingLinks = (loading) => ({
  type: SET_BURGER_MENU_LOADING_LINKS,
  payload: loading
});

export { setBurgerMenuLinks, getBurgerMenuLinks, setBurgerMenuLoadingLinks };
