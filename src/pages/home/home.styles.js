import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  home: {
    boxSizing: 'border-box',
    backgroundColor: theme.palette.backgroundColor,
    textAlign: 'center'
  },
  homeHeader: {
    background:
      'url("https://horondi.blob.core.windows.net/horondi/images/large_10b1e24kgt64yt0_IMG_0423.jpg") no-repeat center center',
    backgroundSize: 'cover',
    height: 800,
    position: 'relative',
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: '.1',
      zIndex: 0
    }
  }
}));
