import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { map } from 'lodash';
import { selectFilterData } from '../redux/selectors/multiple.selectors';
import { page, URL_QUERIES_NAME } from '../configs';
import {
  setCategoryFilter,
  setModelsFilter,
  setPatternsFilter
} from '../redux/products/products.actions';
import {
  CATERGORY_TEXT,
  MODEL_TEXT,
  PATTERN_TEXT
} from '../translations/product-list.translations';

const useProductFilters = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const { language, filterData, filters } = useSelector(selectFilterData);
  const { categoryFilter, patternsFilter, modelsFilter } = filters;
  const dispatch = useDispatch();
  const history = useHistory();
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
  return {
    categories: {
      filterName: CATERGORY_TEXT[language].value,
      productFilter: categoryFilter,
      list: map(filterData.categories, (category) => category.name[language].value),
      categories: filterData.categories,
      filterAction: setCategoryFilter,
      labels: URL_QUERIES_NAME.categoryFilter,
      clearFilter: () => handleFilterClear(setCategoryFilter, URL_QUERIES_NAME.categoryFilter),
      filterHandler: (e) =>
        handleFilterChange(e, URL_QUERIES_NAME.categoryFilter, filterData.categories)
    },
    models: {
      filterName: MODEL_TEXT[language].value,
      productFilter: modelsFilter,
      list: map(filterData.models, (model) => model.name[language].value),
      categories: filterData.models,
      filterAction: setModelsFilter,
      labels: URL_QUERIES_NAME.modelsFilter,
      clearFilter: () => handleFilterClear(setModelsFilter, URL_QUERIES_NAME.modelsFilter),
      filterHandler: (e) => handleFilterChange(e, URL_QUERIES_NAME.modelsFilter, filterData.models)
    },
    patterns: {
      filterName: PATTERN_TEXT[language].value,
      productFilter: patternsFilter,
      list: map(filterData.patterns, (pattern) => pattern.name[language].value),
      categories: filterData.patterns,
      filterAction: setPatternsFilter,
      labels: URL_QUERIES_NAME.patternsFilter,
      clearFilter: () => handleFilterClear(setPatternsFilter, URL_QUERIES_NAME.patternsFilter),
      filterHandler: (e) =>
        handleFilterChange(e, URL_QUERIES_NAME.patternsFilter, filterData.patterns)
    }
  };
};

export default useProductFilters;
