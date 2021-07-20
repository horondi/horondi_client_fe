import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  ukrPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '5%'
  },
  formControl: {
    width: '100%'
  },
  error: {
    color: '#e60000',
    marginTop: 15
  },
  ukrPostTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 18,
    color: isLightTheme ? '#1D1C1C' : '#ffffff'
  }),
  dataInput: {
    width: '87%',
    '@media (max-width: 768px)': {
      width: '100%',
    }
  },
  selectorInfo: {
    width: '87%',
    marginBottom: 15,
    '@media (max-width: 768px)': {
      width: '100%',
    }
  }
}));
