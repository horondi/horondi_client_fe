import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';

import SideBarItem from './sidebar-item';
import { useStyles } from './sidebar.styles';
import { CONSTRUCTOR } from '../../translations/sidebar.translations';
import { sideBarSubList } from '../../configs';
import FooterLinks from '../footer-links';
import HeaderRightBar from '../header-right-bar';

const Sidebar = ({ setIsMenuOpen, isMenuOpen, fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
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
      className={styles.drawer}
      anchor='left'
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
    >
      <List>{categoriesList}</List>
      <Link to='/constructor' className={styles.mainItem} onClick={() => setIsMenuOpen(false)}>
        <span className={styles.constructorItem}>{CONSTRUCTOR[language].value}</span>
      </Link>
      {subList}
      <FooterLinks socialIconsStyles={styles.socialIconsStyles} position='center' />
      <HeaderRightBar fromSideBar />
    </Drawer>
  );
};

export default Sidebar;
