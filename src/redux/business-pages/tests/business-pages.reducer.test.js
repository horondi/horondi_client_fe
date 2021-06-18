import { businessPagesReducer } from '../business-pages.reducer';
import { setBusinessPage, setLoading } from '../business-pages.actions';
import { businessPage } from './business-page.variables';

describe('Business pages reducer tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      pages: {
        aboutUs: {},
        newTestPage: {}
      }
    };
  });

  it('should return default state', () => {
    expect(businessPagesReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new page', () => {
    const state = {
      pages: {
        ...initialState.pages,
        newTestPage: businessPage
      },
      loading: false
    };

    expect(businessPagesReducer(initialState, setBusinessPage(businessPage))).toEqual(state);
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(businessPagesReducer(initialState, setLoading(true))).toEqual(state);
  });
});
