import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    marginTop: fromSideBar ? 'auto' : 0
  }),
  currency: {
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy'
    }
  },
  language: {
    '& div:hover': {
      background: 'black',
      transition: '0.5s easy'
    }
  }
}));
