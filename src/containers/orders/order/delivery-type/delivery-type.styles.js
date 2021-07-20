import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 813px)': {
      alignItems: 'center',
      marginBottom: 50
    }
  },
  sumContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #DADADA',
    borderBottom: '1px solid #DADADA',
    padding: '10px 0',
    '@media (max-width: 813px)': {
      padding: '10px 40px'
    },
    '& svg': {
      fontSize: 'small'
    }
  },
  radioBtn: {
    fontSize: 14
  },
  radioBtnWrapper: {
    paddingBottom: 20,
    '@media (max-width: 813px)': {
      marginLeft: 40
    }
  },
  btnCreateOrder: {
    margin: '20px 0',
    borderRadius: 5,
    color: theme.palette.button.normal.color,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  btnCatalogue: {
    cursor: 'pointer',
    color: '#363636',
    '&:active': {
      color: theme.palette.textColor
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));
