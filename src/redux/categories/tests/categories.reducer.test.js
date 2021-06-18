import { categoriesReducer } from '../categories.reducer';
import { setCategories, setCategoriesLoading } from '../categories.actions';

describe('Categories reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      list: [],
      loading: true
    };
  });

  it('should return default state', () => {
    expect(categoriesReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new categories', () => {
    const newCategories = {
      name: [
        {
          value: 'Рюкзаки',
          lang: 'uk'
        }
      ]
    };
    const state = {
      list: newCategories,
      loading: true
    };

    expect(categoriesReducer(initialState, setCategories(newCategories))).toEqual(state);
  });

  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(categoriesReducer(initialState, setCategoriesLoading(false))).toEqual(state);
  });
});
