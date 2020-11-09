import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const sizeButton = {
    fontSize: '1rem',
    width: '45px',
    height: '45px'
  };

  return {
    sizeButtons: {
      position: 'relative',
      display: 'flex',
      width: '50px',
      marginBottom: '15px',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      }
    },
    label: {
      fontWeight: '700',
      alignSelf: 'center',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      },
      marginRight: '10px'
    },
    error: {
      fontSize: '0.75rem',
      textAlign: 'left',
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
      fontWeight: '400',
      lineHeight: '1.66',
      letterSpacing: '0.03333em',
      color: 'tomato',
      position: 'absolute',
      width: '160px',
      top: '45px'
    },
    sizeButton: {
      ...sizeButton,
      backgroundColor: theme.palette.card.childrenBackgroundColor
    },
    selectedSize: {
      ...sizeButton,
      backgroundColor: theme.palette.card.selectedButton.backgroundColor,
      color: theme.palette.card.selectedButton.color,
      '&:hover': {
        backgroundColor: theme.palette.card.selectedButton.backgroundColor
      }
    },
    container: {
      display: 'flex',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      }
    }
  };
});
