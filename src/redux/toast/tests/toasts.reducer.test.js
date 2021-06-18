import { setToastSettings } from '../toast.actions';
import { newToastSettings } from './toasts.variables';
// eslint-disable-next-line import/named
import { initialState, toastReducer } from '../toast.reducer';

describe('toasts reducer tests', () => {
  it('should return default state', () => {
    expect(toastReducer()).toEqual(initialState);
  });
  it('should return default state', () => {
    expect(toastReducer(initialState)).toEqual(initialState);
  });
  it('should set settings to store', () => {
    expect(toastReducer(initialState, setToastSettings(newToastSettings))).toEqual({
      ...initialState,
      toastSettings: newToastSettings
    });
  });
});
