import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    '@media (max-width: 450px)': {
      display: 'grid',
      gridColumnGap: '0px',
      gridRowGap: '0px'
    }
  },
  photoCart: {
    '@media (max-width: 450px)': {
      gridArea: '1 / 1 / 3 / 2',
      border: 0
    }
  },
  image: (props) => ({
    '& > a': {
      background: `url('${props.image}')no-repeat center center`,
      backgroundSize: 'cover',
      borderRadius: 5,
      width: '100px',
      height: '100px',
      '@media (max-width: 768px)': {
        borderRadius: '50%'
      }
    }
  }),
  description: {
    textAlign: 'center',
    lineHeight: '30px',
    '@media (max-width: 450px)': {
      gridArea: '1 / 2 / 3 / 4',
      border: 0
    }
  },
  itemName: {
    fontSize: '1.7em',
    textDecoration: 'none',
    color: theme.palette.textColor
  },
  price: {
    textAlign: 'center',
    '@media (max-width: 450px)': {
      gridArea: '3 / 2 / 4 / 3',
      marginTop: '15px'
    },
    '@media (max-width: 377px)': {
      marginTop: 5
    }
  },
  doneIcon: {
    position: 'relative',
    top: 4,
    fontSize: '1.5em'
  },

  quantityWrapper: {
    width: '250px',
    '@media (max-width: 450px)': {
      gridArea: '3 / 1 / 4 / 2',
      width: 'auto'
    }
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer',
    '@media (max-width: 450px)': {
      margin: 0
    }
  },
  priceWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImg: {
    marginLeft: 20,
    '@media (max-width: 450px)': {
      width: '150%',
      marginLeft: '-25%'
    }
  },
  delete: {
    gridArea: '3 / 3 / 4 / 4',
    marginTop: '15px'
  }
}));
