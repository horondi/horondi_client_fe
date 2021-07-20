import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  novaPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '5%'
  },
  error: {
    color: '#e60000',
    marginTop: 15
  },
  novaPostTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 18,
    color: isLightTheme ? '#1D1C1C' : '#ffffff'
  }),
  novaPostDataTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 16,
    color: isLightTheme ? '#4E4E4E' : '#ffffff'
  }),
  novaPostData: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '3%'
  },
  dataInput: {
    width: '80%',
    '@media (max-width: 768px)': {
      width: '100%',
    }
  },
  disabled: {
    border: '1px solid red'
  }
}));
