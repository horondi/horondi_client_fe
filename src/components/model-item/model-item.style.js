import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  modelItem: {
    cursor: 'pointer',
    flex: '1 0 31.3333%',
    margin: 5,
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    height: 200,
    position: 'relative',
    boxShadow: '0px 5px 8px #c5c5c5',
    backgroundColor: '#f7f7f7',
    zIndex: '3',
    '& > *': {
      flex: 1
    },
    '&:after': {
      content: `''`,
      background: 'black',
      opacity: 0,
      position: 'absolute',
      transition: 'opacity .2s ease',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    '&:hover div img': {
      zIndex: 12,
      transform: 'scale(1.1)'
    },
    '&:hover div:first-child': {
      color: 'white'
    },
    '&:hover:after': {
      opacity: '.5'
    },
    '&:hover a': {
      opacity: 1
    }
  },
  modelItemTitle: {
    padding: 20,
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 10,
    color: 'black',
    fontSize: '1.6em',
    textAlign: 'left',
    transition: 'color .2s ease',
    textTransform: 'uppercase',
    fontWeight: '600',
    '@media (max-width: 450px)': {
      fontSize: '1.3em'
    }
  },
  modelItemImage: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    right: '30px',
    backgroundSize: 'cover',
    '& img': {
      transition: 'all .2s ease',
      width: 'auto',
      height: '100%',
      '@media (max-width: 450px)': {
        height: '70%',
        marginLeft: '-30px',
        marginTop: '30px'
      }
    }
  },
  link: {
    transition: 'opacity .2s ease',
    position: 'absolute',
    bottom: 20,
    left: '10%',
    opacity: 0,
    zIndex: 10,
    color: 'white',
    fontSize: '1em',
    display: 'flex',
    '& svg': {
      marginLeft: '5px',
      fontSize: '1.2em'
    }
  }
}));
