import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.button.normal.color,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  root: {
    margin: '100px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    '@media (max-width: 768px)': {
      '& img': {
        width: '100%'
      },
      '& h2': {
        fontSize: '25px'
      }
    }
  }
}));
