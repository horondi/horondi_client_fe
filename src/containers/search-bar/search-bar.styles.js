import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    height: 61,
    margin: '0 8px',
    display: fromSideBar ? 'none' : 'inline',
    '@media (max-width: 768px)': {
      height: '70px'
    },
    '& label.Mui-focused': {
      color: 'white',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      borderBottomColor: 'white',
      transition: 'all 0.5s linear'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red'
      },
      '&:hover fieldset': {
        borderColor: 'yellow'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    },
    '& .MuiFormLabel-root': {
      color: 'rgb(255 255 255 / 54%)',
      '@media (max-width: 768px)': {
        marginTop: '2px'
      }
    },
    '& .MuiInputBase-input': {
      color: 'white'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#dedede',
      transition: 'all 0.5s linear'
    }
  }),
  sticky: {
    '& label.Mui-focused': {
      display: 'none'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#0000 !important'
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      borderBottomColor: '#0000 !important'
    }
  }
}));
