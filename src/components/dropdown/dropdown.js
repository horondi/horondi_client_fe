import React, { useLayoutEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Select } from '@material-ui/core';
import clsx from 'clsx';
import { noop } from 'lodash';

import { dropdownStyles } from './dropdown.styles';

const Dropdown = ({ mappedItems, handler, defaultValue, value, fromSideBar }) => {
  const styles = dropdownStyles({ fromSideBar });
  const [sticky, setSticky] = useState(false);
  const stickyLang = clsx({
    [styles.rootSelect]: true,
    [styles.sticky]: sticky
  });
  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div className={styles.rootItem}>
      <Select
        className={stickyLang}
        defaultValue={defaultValue}
        value={value}
        onChange={handler}
      >
        {mappedItems}
      </Select>
    </div>
  );
};

Dropdown.propTypes = {
  mappedItems: propTypes.arrayOf(propTypes.shape({ value: propTypes.number })),
  handler: propTypes.func,
  defaultValue: propTypes.number,
  value: propTypes.number,
  fromSideBar: propTypes.bool,
  styles: propTypes.shape({
    rootItem: propTypes.string,
    rootSelect: propTypes.string
  })
};

Dropdown.defaultProps = {
  mappedItems: [],
  handler: noop,
  defaultValue: 0,
  value: 0,
  fromSideBar: false,
  styles: {
    rootItem: '',
    rootSelect: ''
  }
};

export default Dropdown;
