import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ isModelsVisible, modelsCount }) => ({
    height: !isModelsVisible ? '100vh' : `${(modelsCount / 3) * 210 + 250}px`,
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'height 1s ease',
    '& button': {
      zIndex: 10
    },
    '@media (max-width: 768px)': {
      height: !isModelsVisible ? '100%' : `300px`
    }
  }),
  modelsWrapper: ({ isModelsVisible }) => ({
    display: 'flex',
    flexFlow: 'wrap',
    width: 1280,
    height: isModelsVisible ? '66%' : 210,
    boxSizing: 'border-box',
    justifyContent: 'center',
    position: 'relative',
    transition: 'height 1s ease',
    overflow: 'hidden',
    '@media (max-width: 1024px)': {
      width: '100%'
    },
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 5,
      left: 5,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);',
      zIndex: isModelsVisible ? -1 : 5
    }
  })
}));
