import { makeStyles } from '@material-ui/styles';

const drawerWidth = 320;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2rem 1rem 2rem',
    width: '100%'
  },
  productsWrapper: {
    width: '100%'
  },
  productsDiv: {
    width: '100%',

    '@media (max-width: 768px)': {
      padding: 0,
      margin: 0
    }
  },
  sortDiv: {
    alignItems: 'center',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
    '& div': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginRight: 0
    }
  },
  invisiblePaginationDiv: {
    display: 'none !important'
  },
  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    '& Mui-selected': {
      backgroundColor: 'black !important'
    },
    '@media (max-width:500px)': {
      padding: '1rem 0',
      '& ul': {
        '& li': {
          '& button': {
            minWidth: '25px !important',
            height: '25px !important',
            padding: 0,
            margin: 0
          }
        }
      }
    }
  },
  button: {
    fontSize: '0.9em',
    margin: '0 auto',
    display: 'none',
    '@media (max-width: 959px)': {
      display: 'block'
    }
  },
  filterButtonBlock: {
    padding: '15px'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  list: {
    display: 'flex',
    flexDirection: 'row'
  },
  filterMenu: {
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'none',
    '@media (max-width: 959px)': {
      display: 'block'
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto',
    display: 'flex',
    paddingTop: '20px',
    justifyContent: 'center'
  },
  hide: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  },
  defaultBlock: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.textColor,
    fontSize: '1.2em'
  },
  defaultIcon: {
    width: '100px',
    height: '100px'
  }
}));
