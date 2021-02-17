import React from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useHistory, useLocation } from 'react-router';
import { map } from 'lodash';
import PriceFilter from './price-filter';
import HotItemFilter from './hot-item-filter';
import { useStyles } from './product-list-filter.styles';
import {
  getFiltredProducts,
  setPatternsFilter,
  setCategoryFilter,
  setModelsFilter
} from '../../../redux/products/products.actions';

import {
  MODEL_TEXT,
  PATTERN_TEXT,
  CATERGORY_TEXT,
  CLEAR_FILTER_BUTTON_TEXT
} from '../../../translations/product-list.translations';
import ProductsFiltersContainer from '../../../containers/products-filters-container';
import { selectFilterData } from '../../../redux/selectors/multiple.selectors';
import { countPerPage, page, sort, URL_QUERIES_NAME } from '../../../configs';

const ProductListFilter = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { filters, language, filterData } = useSelector(selectFilterData);
  const { categoryFilter, patternsFilter, modelsFilter } = filters;

  const handleFilterChange = ({ target }, queryName, categoriesList) => {
    let query = searchParams.get(queryName);
    if (categoriesList) {
      const categoryId = categoriesList.filter(
        (element) => element.name[language].value === target.name
      )[0]._id;
      if (query) {
        if (!target.checked) {
          query = query.replace(categoryId, '');
        } else {
          query = query.concat(',', categoryId);
        }
      } else {
        query = categoryId;
      }
    } else if (query) {
      if (!target.checked) {
        query = query.replace(target.name, '');
      } else {
        query = query.concat(',', target.name);
      }
    } else {
      query = target.name;
    }
    if (query) {
      searchParams.set(queryName, query);
    } else {
      searchParams.delete(queryName);
    }
    searchParams.set(page, 1);
    history.push(`?${searchParams.toString()}`);
  };

  const handleFilterClear = (setFilter, queryName) => {
    searchParams.set(page, 1);
    dispatch(setFilter([]));
    searchParams.delete(queryName);
    history.push(`?${searchParams.toString()}`);
  };
  const filtersOptions = {
    categories: {
      filterName: CATERGORY_TEXT[language].value,
      productFilter: categoryFilter,
      list: map(
        filterData.categories,
        (category) => category.name[language].value
      ),
      categories: filterData.categories,
      filterAction: setCategoryFilter,
      labels: URL_QUERIES_NAME.categoryFilter,
      clearFilter: () =>
        handleFilterClear(setCategoryFilter, URL_QUERIES_NAME.categoryFilter),
      filterHandler: (e) =>
        handleFilterChange(
          e,
          URL_QUERIES_NAME.categoryFilter,
          filterData.categories
        )
    },
    models: {
      filterName: MODEL_TEXT[language].value,
      productFilter: modelsFilter,
      list: map(filterData.models, (model) => model.name[language].value),
      categories: filterData.models,
      filterAction: setModelsFilter,
      labels: URL_QUERIES_NAME.modelsFilter,
      clearFilter: () =>
        handleFilterClear(setModelsFilter, URL_QUERIES_NAME.modelsFilter),
      filterHandler: (e) =>
        handleFilterChange(e, URL_QUERIES_NAME.modelsFilter, filterData.models)
    },
    patterns: {
      filterName: PATTERN_TEXT[language].value,
      productFilter: patternsFilter,
      list: map(filterData.patterns, (pattern) => pattern.name[language].value),
      categories: filterData.patterns,
      filterAction: setPatternsFilter,
      labels: URL_QUERIES_NAME.patternsFilter,
      clearFilter: () =>
        handleFilterClear(setPatternsFilter, URL_QUERIES_NAME.patternsFilter),
      filterHandler: (e) =>
        handleFilterChange(
          e,
          URL_QUERIES_NAME.patternsFilter,
          filterData.patterns
        )
    }
  };
  const handleClearFilter = () => {
    const sortQuery = searchParams.get(sort);
    const quantityPerPage = searchParams.get(countPerPage);
    history.push(
      `/products/?page=1&sort=${sortQuery}&countPerPage=${quantityPerPage}`
    );
    dispatch(getFiltredProducts({}));
  };
  const filterButtons = Object.values(
    filtersOptions
  ).map(
    ({
      filterName,
      productFilter,
      list,
      labels,
      filterAction,
      filterHandler,
      clearFilter,
      categories
    }) => (
      <ProductsFiltersContainer
        key={filterName}
        filterName={filterName}
        productFilter={productFilter}
        list={list}
        labels={labels}
        filterAction={filterAction}
        filterHandler={filterHandler}
        clearFilter={clearFilter}
        categories={categories}
      />
    )
  );
  return (
    <div>
      <Grid
        container
        alignItems='center'
        direction='column'
        className={styles.wrapper}
        spacing={2}
      >
        <Button
          className={styles.button}
          data-cy='clear_filter_button'
          variant='contained'
          onClick={handleClearFilter}
        >
          {CLEAR_FILTER_BUTTON_TEXT[language].value}
        </Button>
        <PriceFilter />
        <HotItemFilter language={language} />
        {filterButtons}
      </Grid>
    </div>
  );
};

export default ProductListFilter;
