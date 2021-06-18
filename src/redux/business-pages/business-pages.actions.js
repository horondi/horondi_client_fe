import {
  GET_BUSINESS_PAGE_BY_CODE,
  SET_BUSINESS_PAGE_LOADING,
  SET_BUSINESS_PAGE
} from './business-pages.types';

const getBusinessPageByCode = (code) => ({
  type: GET_BUSINESS_PAGE_BY_CODE,
  payload: code
});

const setBusinessPage = (businessPage) => ({
  type: SET_BUSINESS_PAGE,
  payload: {
    businessPage,
    key: businessPage.code
      .split('-')
      .map((val, idx) => (idx !== 0 ? val[0].toUpperCase() + val.slice(1) : val))
      .join('')
  }
});

const setLoading = (loading) => ({
  type: SET_BUSINESS_PAGE_LOADING,
  payload: loading
});

export { setBusinessPage, getBusinessPageByCode, setLoading };
