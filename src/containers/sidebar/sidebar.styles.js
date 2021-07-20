import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: ({ fromSideBar }) => ({
    '& .MuiDrawer-paper': {
      top: fromSideBar ? 0 : 64,
      padding: theme.spacing(3),
      height: fromSideBar ? '100vh' : 'calc(100vh - 64px)',
      width: 'fit-content',
      minWidth: '300px',
      maxWidth: '450px',
      '@media (max-width: 768px)': {
        top: '40px',
        height: fromSideBar ? '100vh' : 'calc(100vh - 40px)'
      }
    }
  }),
  sticky: ({ fromSideBar }) => ({
    '& .MuiDrawer-paper': {
      top: '40px',
      height: fromSideBar ? '100vh' : 'calc(100vh - 40px)'
    }
  }),
  mainItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    '& span, & svg': {
      fontSize: '1.5em'
    },
    '&:hover span': {
      textDecoration: 'underline'
    }
  },
  subList: {
    marginTop: '50px'
  },
  subItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    margin: '0 20px',
    cursor: 'pointer',
    '& span': {
      fontSize: '1em'
    },
    '&:hover span': {
      textDecoration: 'underline'
    }
  },
  socialIconsStyles: {
    color: '#000',
    fontSize: '3rem',
    transition: 'all 0.5s',
    padding: '0.5rem',
    borderRadius: '100%',
    width: '40px !important',
    height: '40px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#000'
    }
  },
  constructorItem: {
    padding: '30px 0 0'
  }
}));
