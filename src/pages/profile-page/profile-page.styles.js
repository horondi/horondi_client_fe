import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  profile: {
    margin: '26px auto',
    minWidth: 100,
    maxWidth: 835,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '@media screen and (max-width: 907px)': {
      justifyContent: 'center'
    }
  },
  userForm: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    padding: '44px 34px 95px',
    marginBottom: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    rowGap: '20px',
    position: 'relative',
    minWidth: 460
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  imageContainer: {
    width: 103,
    height: 103,
    position: 'relative',
    marginRight: 10,
    gridRow: 'span 2',
    alignSelf: 'center'
  },
  imageAndName: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  dataInput: {
    gridColumn: 'span 3',
    position: 'relative',
    '& p': {
      position: 'absolute',
      top: 48
    }
  },
  nameInputs: {
    gridColumn: 'span 2'
  },
  userNames: {
    display: 'flex',
    flexDirection: 'column'
  },
  photoUpload: {
    display: 'none'
  },
  uploadBtn: {
    width: '100%',
    height: '100%',
    fontWeight: 'bold'
  },
  uploadLabel: {
    height: '100%',
    width: '100%',
    opacity: 0,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    border: '2px solid black',
    background: 'white',
    borderRadius: 5,
    transition: 'all 1s ease',
    '& > span': {
      fontSize: 40,
      color: 'white',
      textShadow: '-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000'
    },
    '&:hover': {
      opacity: 0.7,
      transition: 'all 1s ease'
    }
  },
  restOfUserInputs: {
    display: 'flex',
    flexBasis: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 20,
    '& > div': {
      marginTop: 10
    }
  },
  button: {
    fontSize: '1rem',
    lineHeight: '20px',
    height: '42px',
    width: '100%',
    gridColumn: 'span 3',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  saveBtn: {
    position: 'absolute',
    width: '392px',
    bottom: 26,
    left: 34
  },
  userActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  newPassword: {
    width: 360,
    minHeight: 100,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    padding: '20px 34px',
    textAlign: 'center',
    marginBottom: 20
  },
  confirmUser: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: 360,
    minHeight: 100,
    borderRadius: 5,
    padding: '20px 34px',
    textAlign: 'center'
  },
  afterText: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  },
  recoverPasswordText: {
    display: 'block',
    marginBottom: '15px'
  }
}));
