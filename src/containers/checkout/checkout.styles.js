import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '95vw',
    margin: '1% auto',
    color: theme.palette.textColor
  },
  checkoutHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 10px',
    width: '100%'
  }
}));
