import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    '@media (max-width: 768px)': {
      display: 'block'
    }
  }
}));
