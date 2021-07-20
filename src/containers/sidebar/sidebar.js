import React, { useMemo, useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';

import clsx from 'clsx';
import SideBarItem from './sidebar-item';
import { useStyles } from './sidebar.styles';
import { CONSTRUCTOR } from '../../translations/sidebar.translations';
import { sideBarSubList } from '../../configs';
import FooterLinks from '../footer-links';
import SidemenuRightBar from '../sidemenu-right-bar';
import routes from '../../const/routes';

const { pathToConstructor } = routes;

const Sidebar = ({ setIsMenuOpen, isMenuOpen, fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const [sticky, setSticky] = useState(false);
  const sidebar = clsx({
    [styles.drawer]: true,
    [styles.sticky]: sticky
  });
  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const { language, burgerMenuCategories } = useSelector(({ Language, BurgerMenu }) => ({
    language: Language.language,
    burgerMenuCategories: BurgerMenu.categories
  }));

  const categoriesList = useMemo(
    () =>
      burgerMenuCategories.map(({ category, models }) => (
        <SideBarItem
          category={category._id}
          name={category.name}
          mainItemStyles={styles.mainItem}
          language={language}
          key={category._id}
          models={models}
          handlerItem={() => setIsMenuOpen(false)}
        />
      )),
    [burgerMenuCategories, styles]
  );

  const subList = useMemo(
    () => (
      <div className={styles.subList}>
        {sideBarSubList.map((item) => (
          <Link key={item.link} to={item.link} className={styles.subItem}>
            <span>{item.name[language]}</span>
          </Link>
        ))}
      </div>
    ),
    [sideBarSubList, styles]
  );

  return (
    <Drawer
      className={sidebar}
      anchor='left'
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
    >
      <List>{categoriesList}</List>
      <Link to={pathToConstructor} className={styles.mainItem} onClick={() => setIsMenuOpen(false)}>
        <span className={styles.constructorItem}>{CONSTRUCTOR[language].value}</span>
      </Link>
      {subList}
      <FooterLinks socialIconsStyles={styles.socialIconsStyles} position='center' />
      <SidemenuRightBar fromSideBar />
    </Drawer>
  );
};

export default Sidebar;
