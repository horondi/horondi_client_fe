import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    scrollSnapStop: 'none',
    scrollSnapAlign: 'start'
  },
  header: {
    backgroundColor: '#000000',
    position: 'fixed',
    transition: 'all 0.5s ease-out',
    marginBottom: '64px',
    '@media (max-width: 768px)': {
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      height: '40px',
      '& .MuiToolbar-regular': {
        minHeight: '40px',
        padding: 0,
        width: '95%',
        margin: 'auto'
      }
    }
  },
  headerspace: {
    display: 'block',
    height: '64px',
    width: '100%',
    '@media (max-width: 768px)': {
      height: '40px'
    }
  },
  Headerblock: {
    transition: 'all 0.5s ease-out'
  },
  Headerblocksticky: {
    height: '40px',
    minHeight: '40px',
    transition: 'all 0.5s ease-out'
  },
  sticky: {
    marginBottom: '0px',
    backgroundColor: '#212121ab',
    height: '40px',
    transition: 'all 0.5s ease-out'
  },
  logo: {
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    margin: '0 0.6rem 0 0.2rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      marginLeft: '0px',
      fontSize: '1rem'
    }
  },
  menuButton: {
    color: '#ffffff',
    '@media (max-width: 768px)': {
      padding: '12px 5px 12px'
    }
  },
  categories: {
    flexGrow: 1
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  item: {
    width: '280px',
    height: '30px'
  },
  icon: {
    '@media (min-width: 900px)': {
      width: '3px'
    }
  },
  rightBar: {}
}));
