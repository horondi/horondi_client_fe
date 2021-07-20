import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  constructorPreview: ({ isMouseIn }) => ({
    width: '100%',
    position: 'relative',
    margin: '50px 0',
    boxSizing: 'border-box',
    overflowY: 'hidden',
    '&:after': {
      opacity: isMouseIn ? 1 : 0,
      transition: 'opacity .5s ease',
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(rgb(171 171 171 / 13%) 0%, rgb(0, 0, 0) 100%)'
    },
    '& video': {
      '@media (max-width: 768px)': {
        width: '150% !important'
      }
    }
  }),
  constructorInner: ({ isMouseIn }) => ({
    transition: 'all .2s ease',
    color: 'white',
    content: `''`,
    position: 'absolute',
    height: '200px',
    right: 0,
    left: 0,
    bottom: isMouseIn ? 0 : -100,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 30,
    zIndex: 5,
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);'
  }),
  constructorInnerIcon: ({ isMouseIn }) => ({
    position: 'absolute',
    left: '50%',
    top: 20,
    transform: `translateX(-50%) ${isMouseIn ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    fontSize: '4em'
  }),
  constructorInnerLink: {
    color: 'white',
    fontSize: '3em',
    display: 'flex',
    '@media (max-width: 768px)': {
      fontSize: '25px',
      marginLeft: '25px'
    },
    '& svg': {
      marginLeft: '10px',
      fontSize: '1.4em'
    }
  },
  playerSoundControl: {
    position: 'absolute',
    cursor: 'pointer',
    zIndex: 100,
    right: 80,
    bottom: 30,
    '& svg': {
      color: 'white'
    }
  }
}));
