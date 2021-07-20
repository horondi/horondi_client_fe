import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  courierContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '2%',
  },
  inputData: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%' 
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '2%'
  },
  error: {
    color: '#e60000',
    marginBottom: '2%'
  },
  textField: {
    width: '80%',
    marginBottom: '3%',
    '@media (max-width: 768px)': {
      width: '100%',
    }
  },
  courierTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 20,
    width: '100%',
    color: isLightTheme ? '#242424' : '#ffffff',
    margin: '20px 0 20px 0'
  }),
  courierInputDataTitle: ({ isLightTheme }) => ({
    fontWeight: 400,
    fontSize: 20,
    color: isLightTheme ? '#242424' : '#ffffff',
    margin: '0 0 20px 0'
  })
}));
