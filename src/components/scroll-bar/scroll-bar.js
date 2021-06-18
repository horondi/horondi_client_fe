import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IconButton as BurgerMenu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { scrollBarStyles } from './scroll-bar.styles';
import { SCROLL_BAR_DATA } from '../../configs';
import Sidebar from '../../containers/sidebar';

const ScrollBar = ({ homeRef }) => {
  const language = useSelector(({ Language }) => Language.language);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState({});

  const styles = scrollBarStyles({
    isDarkSection: currentSection.sectionStyle === 'dark'
  });

  const scrollHandler = () => {
    const homeElement = homeRef.current;

    if (!homeElement) {
      return;
    }

    const windowMiddle = window.scrollY + window.innerHeight / 2;
    const sectionsData = Array.from(homeElement.children)
      .slice(0, 5)
      .filter((item) => item.id)
      .map((item) => {
        const sectionStyles = window.getComputedStyle(item);
        const margin = parseFloat(sectionStyles.marginTop) + parseFloat(sectionStyles.marginBottom);

        return {
          id: `#${item.id}`,
          sectionStyle: item.dataset.sectionStyle,
          sectionStart: item.offsetTop,
          sectionEnd: item.offsetTop + item.offsetHeight + margin
        };
      });

    const sectionOnView = sectionsData.find(
      (el) => el.sectionStart <= windowMiddle && el.sectionEnd >= windowMiddle
    );

    if (sectionOnView && sectionOnView.id !== currentSection.id) {
      setCurrentSection({
        id: sectionOnView.id,
        sectionStyle: sectionOnView.sectionStyle
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      {window.scrollY >= 200 && (
        <BurgerMenu className={styles.fixedBurgerMenu} onClick={() => setIsMenuOpen(true)}>
          <MenuIcon />
        </BurgerMenu>
      )}
      <div className={styles.scrollBar}>
        {SCROLL_BAR_DATA.map((item) => (
          <a key={item.href} href={item.href} className={styles.scrollBarItem}>
            <div className={styles.sectionPoint} data-id={item.href === currentSection.id} />
            <span className={styles.sectionTitle}>{item.name[language]}</span>
          </a>
        ))}
      </div>
      <Sidebar setIsMenuOpen={setIsMenuOpen} fromSideBar isMenuOpen={isMenuOpen} />
    </>
  );
};

export default ScrollBar;
