import { SET_SNACKBAR_MESSAGE, SET_SNACKBAR_SEVERITY, SET_SNACKBAR_STATUS } from './snackbar.types';

const setSnackBarStatus = (newSnackBarStatus) => ({
  type: SET_SNACKBAR_STATUS,
  payload: newSnackBarStatus
});

const setSnackBarSeverity = (newSnackBarSeverity) => ({
  type: SET_SNACKBAR_SEVERITY,
  payload: newSnackBarSeverity
});

const setSnackBarMessage = (newSnackBarMessage) => ({
  type: SET_SNACKBAR_MESSAGE,
  payload: newSnackBarMessage
});

export { setSnackBarStatus, setSnackBarSeverity, setSnackBarMessage };
