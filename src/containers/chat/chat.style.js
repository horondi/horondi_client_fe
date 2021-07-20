import { makeStyles } from '@material-ui/core/styles';

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const useStyles = makeStyles((theme) => ({
  chatIcon: ({ iconsVisible }) => ({
    ...flexCenter,
    background: iconsVisible ? '#E4B200' : 'black',
    margin: '0px 12px',
    padding: '0px',
    position: 'fixed',
    zIndex: '3',
    bottom: '30px',
    top: 'auto',
    height: '60px',
    width: '60px',
    borderRadius: '29px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px',
    right: '12px',
    transition: 'background 0.3s',
    '@media (max-width: 768px)': {
      width: '40px',
      height: '40px',
      boxShadow: ' 0 0 10px white',
      zIndex: 1200
    },
    '&:hover': {
      cursor: 'pointer',
      background: '#E4B200'
    }
  }),
  iconsMessengers: {
    margin: '0px 12px',
    padding: '0px',
    position: 'fixed',
    zIndex: '100',
    bottom: '110px',
    top: 'auto',
    height: '60px',
    width: '60px',
    borderRadius: '29px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px',
    background: 'none',
    display: 'block',
    right: '12px',
    '@media (max-width: 768px)': {
      width: '40px',
      height:'40px'
    }
  },
  msgIcon: {
    ...flexCenter,
    width: '60px',
    height: '60px',
    background: 'black',
    borderRadius: '50%',
    marginBottom: '20px',
    cursor: 'pointer',
    boxShadow: 'white 0px 0px 10px',
    transition: 'background 0.3s',
    '@media (max-width: 768px)': {
      width: '40px',
      height:'40px'
    },
    '&:hover': {
      background: '#E4B200'
    }
  },
  msgIconActive: (mailFormVisible) => ({
    ...flexCenter,
    width: '60px',
    height: '60px',
    background: mailFormVisible ? '#E4B200' : 'black',
    borderRadius: '50%',
    marginBottom: '20px',
    cursor: 'pointer'
  }),
  mailForm: ({ themeMode }) => ({
    borderRadius: '4px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: '160px',
    bottom: '12%',
    width: '320px',
    height: '600px',
    zIndex: 1200,
    background: themeMode ? 'white' : '#232323',
    boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.25)',
    '@media (max-width: 768px)': {
      width: '100%',
      right: 0,
      top: '40px'
    }
  }),
  cancelIcon: {
    position: 'absolute',
    right: '1px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  contacts: {
    ...flexCenter,
    background: theme.palette.backgroundColor,
    width: '100%',
    height: '40%',
    fontSize: '1.1rem',
    flexDirection: 'column',
    borderRadius: '4px'
  },
  contactsTitle: {
    margin: '3px 0 2px 0',
    fontSize: '1.3rem'
  },
  phoneNumbers: {
    color: theme.palette.textColor
  },
  mailTitle: {
    marginTop: '5%',
    marginBottom: '6%',
    fontSize: '1.3rem'
  },
  logo: {
    height: '15px',
    width: '15px'
  },
  formField: ({ themeMode }) => ({
    ...flexCenter,
    background: themeMode ? '#efefef' : '#232323',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderRadius: '4px'
  }),
  btnSend: {
    marginBottom: '20px',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    padding: 10,
    color: theme.palette.button.normal.color,
    '& a': {
      color: 'inherit'
    },
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      fontSize: '1em',
      padding: 5
    }
  },
  dataInput: {
    height: '100%',
    marginBottom: '15px',
    width: '280px'
  },
  icon: {
    color: theme.palette.white,
    fontSize: '35px',
    '@media (max-width: 768px)': {
      fontSize: '25px !important'
    }
  },
  activeMsgWrapper: {
    height: '65%',
    width: '100%'
  },
  thankForMsgWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%'
  },
  thankForMsg: {
    fontSize: '1rem',
    marginBottom: '20px'
  }
}));
