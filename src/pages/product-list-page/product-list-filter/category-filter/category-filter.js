import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import { CATERGORY_TEXT } from '../../../../translations/product-list.translations';
import { useStyles } from '../product-list-filter.styles';
import { setCategoryFilter } from '../../../../redux/products/products.actions';

const CategoryFilter = ({ filterData, filters, language }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { categoryFilter } = filters;

  const categoriesName = filterData.map(
    (product) => product.category.name[1].value
  );

  const categories = filterData
    .map((product) => product.category)
    .filter(
      (category, index) =>
        categoriesName.indexOf(category.name[1].value) === index
    );

  const handleCategoryChange = (event) => {
    if (!event.target.checked) {
      dispatch(
        setCategoryFilter(
          categoryFilter.filter((category) => category !== event.target.name)
        )
      );
    } else {
      dispatch(
        setCategoryFilter([...new Set([...categoryFilter, event.target.name])])
      );
    }
  };

  const [isFiltersHidden, toggleFilters] = useState(true);

  return (
    <FormGroup data-cy='category_filter'>
      <Typography
        className={styles.filterName}
        data-cy='categories'
        gutterBottom
        onClick={() => toggleFilters(!isFiltersHidden)}
      >
        <span>{CATERGORY_TEXT[language].value}:</span>
        <span style={{ textDecoration: 'underline' }}>{categories.length}</span>
      </Typography>
      {isFiltersHidden &&
        categories.map((category) => (
          <FormControlLabel
            key={category.name[1].value}
            className={styles.checkbox}
            control={
              <Checkbox
                data-cy={category.name[1].value.toLowerCase()}
                name={category._id}
                checked={
                  !!categoryFilter.find((filter) => filter === category._id)
                }
              />
            }
            label={category.name[language].value}
            onChange={handleCategoryChange}
          />
        ))}
      <Divider />
    </FormGroup>
  );
};

export default CategoryFilter;
