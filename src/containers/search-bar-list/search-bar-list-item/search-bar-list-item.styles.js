import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  searchBarListItem: {
    display: 'flex',
    height: 110,
    width: '100%',
    padding: 10,
    borderBottom: '1px solid #c3c3c3'
  },
  image: ({ image, isLightTheme }) => ({
    background: `url(${image}) no-repeat center ${isLightTheme ? '#f6f6f6' : '#323232'}`,
    width: 80,
    height: '100%'
  }),
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  title: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    '& :last-child': {
      color: '#5a5a5a',
      fontSize: '.9em'
    }
  },
  buttons: {
    display: 'flex',
    '& button': {
      width: 'fit-content',
      minWidth: 'fit-content',
      height: '30px',
      margin: '10px 5px'
    }
  }
}));
