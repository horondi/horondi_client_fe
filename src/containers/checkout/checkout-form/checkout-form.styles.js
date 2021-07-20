import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.textColor,
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    width: 260,
    marginLeft: '2%',
    marginBottom: '3%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '100%',
      margin:0
    }
  },
  paymentSelect: {
    height: 50,
    width: 280,
    marginBottom: 10,
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  contactInfoTitle: ({ isLightTheme }) => ({
    fontSize: 18,
    fontWeight: 400,
    color: isLightTheme ? '#4E4E4E' : '#fffff',
    width: '40%',
    marginLeft: '2%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }),
  paymentTitle: {
    marginTop: '3%'
  },
  contactInfoAdditional: {
    fontSize: 13,
    marginLeft: '2%'
  },
  orderCommentTitle: {
    fontSize: 18,
    fontWeight: 400,
    color: '#4E4E4E'
  },
  contactInfoFields: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 10,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '100%',
      margin:0
    }
  },
  a: {
    margin: 0
  },
  contactPaymentInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1%'
  },
  checkoutFormContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    '@media (max-width: 1150px)': {
      flexDirection: 'column'
    }
  },
  userInfoContainer: {
    width: '60%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  contactInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  error: {
    color: '#e60000',
    marginLeft: '3%'
  },
  textField: {
    width: 300,
    margin: 10,
    '@media (max-width: 768px)': {
      width: '100%',
      margin:"10px 0px 10px"
    }
  },
  textAreaField: {
    width: 500,
    marginLeft: '2%',
    '@media (max-width: 768px)': {
      width: '100%',
      margin: 0
    }
  },
  submitInfo:{
        '@media (max-width: 768px)': {
      width: '100%',
      margin: 0
    }
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 17,
    outline: 'none',
    background: palette.button.normal.backgroundColor,
    borderRadius: '10px',
    width: 280,
    margin: '0px auto 20px',
    height: 43,
    cursor: 'pointer',
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  totalSum: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262',
    margin: '9% 0 7% 0',
    height: 50
  },
  totalSumTitle: ({ isLightTheme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 400,
    color: isLightTheme ? '#363636' : '#fff',
    margin: 0,
    width: '100%',
    height: 20
  }),
  totalSumValue: {
    justifyContent: 'flex-end'
  },
  goods: ({ isLightTheme }) => ({
    fontSize: 13,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: '0.2s'
    },
    width: '55%'
  }),
  delivery:{
    width:'100%',
  },
  deliveryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '36%',
    '@media (max-width: 1150px)': {
      width: '100%',
      marginTop: '2%'
    },
    marginRight: '2%'
  },
  inputData: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  checkoutTitleInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  checkoutTitleInfoData: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  backBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '0 20px 0 0',
    height: '100%',
    width: 48,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.1s'
    }
  },
  checkoutTitle: ({ isLightTheme }) => ({
    fontSize: 28,
    fontWeight: 400,
    color: isLightTheme ? '#000000' : '#ffffff',
    margin: '10px 0 10px 2%',
    width: '100%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  }),
  checkoutYourOrderTitleData: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  checkoutTitleLine: {
    width: '80%',
    background: '#636262',
    height: 1,
    '@media (max-width: 920px)': {
      width: '100%'
    }
  },

  consentMessage: {
    fontSize: 12,
    letterSpacing: '.3px',
    color: '#929292',
    lineHeight: '16px'
  },

  consentLink: {
    color: '#929292',
    textDecoration: 'underline',
    '&:hover': {
      color: '#1976D2',
      backgroundColor: 'transparent'
    }
  }
}));
