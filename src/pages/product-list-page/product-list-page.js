import React, { useEffect, useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useStyles } from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import ProductListItem from './product-list-item';
import {
  getAllFilters,
  setCurrentPage,
  getFiltredProducts,
  setCategoryFilter,
  setPriceFilter
} from '../../redux/products/products.actions';

import {
  SHOW_FILTER_BUTTON_TEXT,
  HIDE_FILTER_BUTTON_TEXT
} from '../../translations/product-list.translations';
import { Loader } from '../../components/loader/loader';

const ProductListPage = ({ category, model }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {
    loading,
    language,
    products,
    pagesCount,
    currentPage,
    countPerPage,
    sortByRate,
    sortByPrice,
    filters,
    filterData,
    sortByPopularity,
    currency
  } = useSelector(({ Language, Products, Currency }) => ({
    loading: Products.loading,
    language: Language.language,
    products: Products.products,
    pagesCount: Products.pagesCount,
    sortByRate: Products.sortByRate,
    sortByPrice: Products.sortByPrice,
    filters: Products.filters,
    filterData: Products.filterData,
    sortByPopularity: Products.sortByPopularity,
    countPerPage: Products.countPerPage,
    currentPage: Products.currentPage,
    currency: Currency.currency
  }));

  const { categoryFilter } = filters;

  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(window.matchMedia('(min-width: 768px)').matches);
  }, []);

  useEffect(() => {
    dispatch(getAllFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFiltredProducts({}));
  }, [
    dispatch,
    sortByRate,
    sortByPrice,
    sortByPopularity,
    countPerPage,
    categoryFilter,
    category,
    model,
    currentPage
  ]);

  useEffect(() => {
    dispatch(setCategoryFilter([category._id]));
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
  }, [category, filterData, model, currency, dispatch]);

  const changeHandler = (e, value) => dispatch(setCurrentPage(value));

  const handleFilterShow = () => setMobile(!mobile);

  if (loading || !filterData) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  const categoryText = category.name[language].value.toUpperCase();
  const itemsToShow = products.map((product) => (
    <ProductListItem
      key={product._id}
      product={product}
      category={categoryText}
    />
  ));

  return (
    <div className={styles.root}>
      <Typography className={styles.paginationDiv} variant='h3'>
        {categoryText}
      </Typography>
      <div className={styles.sortDiv}>
        <ProductSort />
      </div>
      <div className={styles.list}>
        <div className={styles.filter}>
          {mobile && <ProductFilter selectedCategory={category} />}
          {!mobile && (
            <Button
              className={`${styles.button} ${styles.mobile}`}
              variant='contained'
              onClick={handleFilterShow}
            >
              {SHOW_FILTER_BUTTON_TEXT[language].value}
            </Button>
          )}
          {mobile && (
            <div
              className={`${styles.hide} ${styles.mobile}`}
              variant='contained'
              onClick={handleFilterShow}
            >
              {HIDE_FILTER_BUTTON_TEXT[language].value}
            </div>
          )}
        </div>
        <div className={styles.productsDiv}>{itemsToShow}</div>
      </div>
      <div className={styles.paginationDiv}>
        <Pagination
          count={pagesCount}
          variant='outlined'
          shape='rounded'
          page={currentPage + 1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
