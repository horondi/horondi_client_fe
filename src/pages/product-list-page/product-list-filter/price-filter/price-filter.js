import React, { useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import {
  PRICE_TEXT,
  PRICE_FROM,
  PRICE_TO
} from '../../../../translations/product-list.translations';
import { useStyles } from '../product-list-filter.styles';
import { URL_QUERIES_NAME } from '../../../../configs/index';
import { setPriceFilter } from '../../../../redux/products/products.actions';

const PriceFilter = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { priceFilter, page, defaultPage } = URL_QUERIES_NAME;

  const { filters, language, currency, maxPrice, minPrice } = useSelector(
    ({ Products, Language, Currency }) => ({
      filters: Products.filters.priceFilter,
      language: Language.language,
      currency: Currency.currency,
      maxPrice: Products.filterData.maxPrice,
      minPrice: Products.filterData.minPrice
    })
  );

  useEffect(() => {
    if (searchParams.get(priceFilter)) {
      dispatch(
        setPriceFilter(
          searchParams
            .get(priceFilter)
            .split(',')
            .map((price) => price * 100)
        )
      );
    } else if (minPrice && maxPrice) {
      dispatch(setPriceFilter([minPrice[currency].value, maxPrice[currency].value]));
    }
  }, [dispatch, searchParams.toString()]);

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceFilter(newValue.map((value) => value * 100)));
  };
  const handlePriceFilter = () => {
    searchParams.set(priceFilter, filters.map((price) => price / 100).join());
    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };
  const min = parseInt(minPrice ? minPrice[currency].value / 100 : 0, 10);
  const max = parseInt(maxPrice ? maxPrice[currency].value / 100 : 1000, 10);
  return (
    <FormGroup data-cy='price_filter'>
      <Typography id='range-slider' gutterBottom>
        {PRICE_TEXT[language].value}: {PRICE_FROM[language].value} {Math.round(filters[0] / 100)}-{' '}
        {PRICE_TO[language].value} {Math.round(filters[1] / 100)}
      </Typography>
      <Slider
        className={styles.slider}
        value={filters.map((price) => price / 100)}
        defaultValue={filters.map((price) => price / 100)}
        onChange={handlePriceChange}
        onChangeCommitted={handlePriceFilter}
        valueLabelDisplay='auto'
        min={min}
        max={max+1}
        aria-labelledby='range-slider'
      />
    </FormGroup>
  );
};

export default PriceFilter;
