import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
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
    lineHeight: '30px'
  },
  itemName: {
    fontSize: '1.7em',
    textDecoration: 'none',
    color: theme.palette.textColor
  },
  price: {
    textAlign: 'center'
  },
  doneIcon: {
    position: 'relative',
    top: 4,
    fontSize: '1.5em'
  },

  quantityWrapper: {
    width: '250px'
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer'
  },
  priceWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImg: {
    marginLeft: 20
  }
}));
