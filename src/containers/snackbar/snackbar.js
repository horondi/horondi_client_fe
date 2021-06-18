import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BaseSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { setSnackBarStatus } from '../../redux/snackbar/snackbar.actions';
import { SNACKBAR_DURATION } from '../../configs';

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />;

const Snackbar = () => {
  const dispatch = useDispatch();

  const { snackBarStatus, snackBarSeverity, snackBarMessage, language } = useSelector(
    ({ Snackbar: snackbar, Language }) => ({
      snackBarStatus: snackbar.snackBarStatus,
      snackBarSeverity: snackbar.snackBarSeverity,
      snackBarMessage: snackbar.snackBarMessage,
      language: Language.language
    })
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnackBarStatus(false));
  };

  return (
    <BaseSnackbar
      id='snack-bar'
      open={snackBarStatus}
      autoHideDuration={SNACKBAR_DURATION}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={snackBarSeverity}>
        {snackBarMessage[language]}
      </Alert>
    </BaseSnackbar>
  );
};

export default Snackbar;
