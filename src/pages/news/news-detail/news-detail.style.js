import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  hide: {
    display: 'none'
  },
  ArticleTitle: {
    textAlign: 'center'
  },
  imagesContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '25rem',
    width: '25rem',
    overflow: 'hidden',
    borderRadius: '5px'
  },
  media: {
    height: '25rem',
    width: '25rem',
    paddingTop: '56.25%',
    transition: '2s',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  newsText: {
    textAlign: 'justify',
    '@media (max-width: 768px)': {
      width: '100%',
      '& img': {
        width: '100%'
      }
    }
  },
  newsAuthorFooter: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  authorAvatar: {
    borderRadius: '2rem',
    minHeight: '9rem',
    minWidth: '5rem'
  },
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  }
}));
