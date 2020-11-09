import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useDispatch, useSelector } from 'react-redux';
import ColorsFilter from './colors-filter';
import PatternsFilter from './patterns-filter';
import CategoryFilter from './category-filter';
import PriceFilter from './price-filter';
import ModelsFilter from './models-filter';
import HotItemFilter from './hot-item-filter';

import { useStyles } from './product-list-filter.styles';
import {
  getFiltredProducts,
  setColorsFilter,
  setPatternsFilter,
  setCategoryFilter,
  setPriceFilter,
  setSearchFilter,
  setHotItemFilter,
  setModelsFilter
} from '../../../redux/products/products.actions';

import {
  SEARCH_TEXT,
  FILTER_BUTTON_TEXT,
  CLEAR_FILTER_BUTTON_TEXT
} from '../../../translations/product-list.translations';

const ProductListFilter = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const { filterData, filters, language, currency } = useSelector(
    ({
      Products: { filterData, filters },
      Language: { language },
      Currency: { currency }
    }) => ({
      filterData,
      filters,
      language,
      currency
    })
  );

  const { searchFilter } = filters;

  const handleSearch = (event) => {
    dispatch(setSearchFilter(event.target.value));
  };

  const handleFilter = () => {
    dispatch(getFiltredProducts({}));
  };

  const handleClearFilter = () => {
    dispatch(setColorsFilter([]));
    dispatch(setPatternsFilter([]));
    dispatch(setCategoryFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(setHotItemFilter(false));
    dispatch(setModelsFilter([]));
    dispatch(
      setPriceFilter([
        Math.min(
          ...filterData.map((product) => product.basePrice[currency].value)
        ),
        Math.max(
          ...filterData.map((product) => product.basePrice[currency].value)
        )
      ])
    );
    dispatch(getFiltredProducts({}));
  };

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <FormControl component='fieldset' className={styles.formControl}>
          <FormGroup data-cy='search'>
            <TextField
              className={styles.search}
              onChange={handleSearch}
              value={searchFilter}
              id='outlined-search'
              label={SEARCH_TEXT[language].value}
              type='search'
              variant='outlined'
            />
          </FormGroup>
          <FormGroup className={styles.controls}>
            <Button
              className={styles.button}
              data-cy='filter_button'
              variant='contained'
              onClick={handleFilter}
            >
              {FILTER_BUTTON_TEXT[language].value}
            </Button>
            <Button
              className={styles.button}
              data-cy='clear_filter_button'
              variant='contained'
              onClick={handleClearFilter}
            >
              {CLEAR_FILTER_BUTTON_TEXT[language].value}
            </Button>
          </FormGroup>
          <HotItemFilter filters={filters} language={language} />
          <PriceFilter
            filterData={filterData}
            filters={filters}
            language={language}
            currency={currency}
          />
          <CategoryFilter
            filterData={filterData}
            filters={filters}
            language={language}
          />
          <ModelsFilter
            filterData={filterData}
            filters={filters}
            language={language}
          />
          <ColorsFilter
            filterData={filterData}
            filters={filters}
            language={language}
          />
          <PatternsFilter
            filterData={filterData}
            filters={filters}
            language={language}
          />
        </FormControl>
      </Paper>
    </div>
  );
};

export default ProductListFilter;
