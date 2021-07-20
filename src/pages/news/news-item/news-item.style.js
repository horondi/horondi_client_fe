import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Montserrat',
    width: '90%',
    marginBottom: '5rem',
    '@media (max-width: 768px)': {
      margin: '0px auto 5rem'
    }
  },
  Link: {
    textDecoration: 'none'
  },
  container: {
    minWidth: '20rem',
    maxWidth: '27rem'
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
  newsItemContent: {
    padding: '16px 16px 0'
  },
  ArticleTitle: {
    minHeight: '3rem'
  },
  newsText: {
    minHeight: '20rem',
    textAlign: 'justify',
    maxHeight: '20rem',
    overflow: 'hidden'
  },
  newsFooter: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, auto))',
    gridColumnGap: '10px',
    '& > *': {
      padding: '10px'
    }
  },
  newsButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#4c4545',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  newsAuthorFooter: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  authorName: {
    padding: 0
  }
}));
