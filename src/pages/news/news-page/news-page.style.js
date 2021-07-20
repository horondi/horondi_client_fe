import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  newsTitle: {
    textAlign: 'center'
  },
  NewsPageItem: {
    marginTop: '5rem',
    margin: '5rem auto',
    marginRight: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(27rem, auto))',
    gridColumnGap: '15px',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  },
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  }
}));
