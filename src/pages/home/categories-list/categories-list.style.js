import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  catalog: {
    height: '100vh',
    marginTop: 50,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      '& .react-multiple-carousel__arrow': {
        width: '40px !important',
        height: '40px !important',
        zIndex: 0
      }
    },
    '& > div': {
      height: '100%',
      width: '100%'
    },
    '& .react-multi-carousel-list': {
      height: '100%'
    }
  },
  categoriesContainer: {
    margin: '0 auto'
  },
  carouselContainer: {},
  loadingIndicator: {
    marginTop: '3em'
  },
  title: {
    fontSize: '2em',
    color: theme.palette.textColor
  }
}));
