import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.textColor,
    margin: '50px auto',
    maxWidth: 1280,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    '& h1': {
      textAlign: 'center',
      fontSize: '45px'
    },
    '& > h2, h3': {
      textDecoration: 'underline orangered',
      textAlign: 'left'
    },
    '& h3': {
      fontSize: '30px'
    },
    '& > p > strong': {
      margin: 0,
      lineHeight: 0,
      color: 'white',
      alignSelf: 'flex-end',
      position: 'relative',
      fontWeight: 'bold',
      zIndex: 1
    },
    '& .editor-img ': {
      width: 200,
      float: ' left',
      margin: '0 30px 30px 0',
      '@media (max-width: 768px)': {
        width: '100%'
      }
    },
    '.sliderImage img': {
      width: '100%'
    },
    '.sliderImage img , .editor-img': {
      height: 'auto'
    },
    '& .awssld__content p': {
      position: 'absolute',
      margin: 0,
      color: '#fff',
      bottom: '37px',
      left: '22px',
      fontSize: '24px',
      fontWeight: 600
    },
    '& .awssld__content': {
      borderRadius: '10px'
    },
    '& .awssld__content img': {
      opacity: '50%'
    },
    '& .awssld__controls button .awssld__controls__arrow-left, & .awssld__controls button .awssld__controls__arrow-right': {
      opacity: 1
    },
    '& .awssld__controls__arrow-left:before, & .awssld__controls__arrow-left:after, & .awssld__controls__arrow-right:before, & .awssld__controls__arrow-right:after': {
      background: '#fff'
    }
  }
}));
