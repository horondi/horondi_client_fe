import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  constructorWrapper: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headingWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainHeader: {
    fontSize: '24px'
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 100px',
    '@media (max-width: 768px)': {
      padding: 0,
      flexDirection: 'column'
    }
  },
  formWrapper: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '100%'
    },
    '& > div': {
      margin: '15px 0'
    }
  },
  imageContainer: {
    maxHeight: '470px',
    width: '35%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  image: {
    width: '100%'
  },
  infoWrapper: {
    display: 'flex'
  },
  pricesInfoWrapper: {
    width: '25%',
    '@media (max-width: 768px)': {
      width: '100%'
    }
  },
  headerWrapper: {
    marginLeft: '5%',
    '@media (max-width: 768px)': {
      marginLeft: 0
    }
  },
  textWrapper: {
    fontSize: '17px',
    marginBottom: '12px',
    '@media (max-width: 768px)': {
      '& ul': {
        padding: 0
      }
    }
  },
  priceWrapper: {
    '& ul': {
      '& li': {
        width: '150px',
        fontSize: '17px',
        listStyleType: 'none'
      }
    }
  },
  priceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '100%'
  },
  li: {
    marginTop: '25px'
  }
}));
