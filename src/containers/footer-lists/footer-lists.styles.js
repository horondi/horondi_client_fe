import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardDeck: {
    display: 'flex'
  },
  cardBody: {
    flex: 1,
    padding: '25px',
    '& h6':{
      color: '#9d9d9d',
      marginLeft:'10px'
    },
    '@media screen and (max-width: 552px)': {
      width: '100%',
      padding: '25px 25px 20px',
      borderBottom:'1px solid #9d9d9d'
    }
  },

  cardTitle: {
    marginBottom: '10px',
    '& h5':{
      fontSize:'18px',
      fontWeight:'600',
    },
  },
  cardLink: {
    color: '#9d9d9d',
    '&:hover': {
      color: '#ffffff'
    }
  }
}));
