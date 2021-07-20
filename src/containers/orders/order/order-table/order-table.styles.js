import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 450px)': {
      flexDirection: 'column',
      ' & span': {
        width: '100%'
      }
    }
  },
  cartActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: 40
  },
  cartButton: {
    margin: '10px 0 10px 20px',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    color: '#363636',
    outline: 'none',
    '&:active': {
      color: theme.palette.textColor
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  tableHeader: {
    borderTop: '1px solid #DADADA',
    borderBottom: '1px solid #DADADA',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    },
    '@media (max-width: 450px)': {
      display: 'none'
    }
  },
  quantity: {
    color: 'grey',
    fontWeight: 'lighter'
  }
}));
