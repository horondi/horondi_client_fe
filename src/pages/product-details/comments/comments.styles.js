import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;
  return {
    loadMore: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '14px',
      color,
      borderTop: '4px solid #c2c2c2',
      padding: '15px 0'
    },
    loadMoreText: {
      '&:hover': {
        cursor: 'pointer',
        borderBottom: '2px solid #000000',
        height: '20px'
      }
    },
    comment: {
      padding: '0 3rem',
      '& hr': {
        border: 'none',
        color: '#C2C2C2',
        backgroundColor: '#C2C2C2',
        height: '0.05rem'
      },
      '@media (max-width: 400px)': {
        padding: '0 1rem',
        marginTop: '0'
      }
    },
    form: {
      marginTop: '15px',
      '& *': {
        '& .MuiOutlinedInput-root': {
          background: '#fff',
          '& fieldset': {
            borderColor: theme.palette.textColor
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.textColor
          }
        },
        '& label.Mui-focused': {
          color: theme.palette.textColor
        },
        '& label': {
          transform: 'translate(14px, 14px) scale(1)'
        },
        '& div > input': {
          padding: '13px 16px',
          fontSize: '0.9rem'
        },
        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: 'tomato'
        },
        '& .MuiFormLabel-root.Mui-error': {
          color: 'tomato'
        },
        '& .MuiFormHelperText-root.Mui-error': {
          color: 'tomato'
        }
      },
      '@media (max-width: 950px)': {
        marginTop: '0',
        display: 'flex',
        flexDirection: 'column',
        '&:nth-child(1)': {
          marginBottom: '2rem'
        }
      }
    },
    input: {
      marginBottom: '45px',
      float: 'left',
      width: '308px',
      paddingRight: '1rem',
      height: '2rem',
      '@media (max-width: 950px)': {
        marginBottom: '1.5rem',
        marginTop: '15px',
        width: '100%',
        padding: 0
      },
      '& p': {
        position: 'absolute',
        top: '45px',
        fontSize: '10px'
      },
      '& input': {
        background: '#fff',
        fontFamily: 'Montserrat',
        fontWeight: '500'
      }
    },
    text: {
      marginRight: '500px',
      position: 'relative',
      width: '100%',
      '@media (max-width: 950px)': {
        width: '100%',
        marginTop: '1rem'
      },
      '@media (max-width: 600px)': {
        width: '100%',
        padding: 0,
        '& label':{
          width:'90%'
        }
      },
      '& p': {
        position: 'absolute',
        top: '170px',
        fontSize: '10px'
      },
      '& textarea': {
        fontFamily: 'Montserrat',
        fontSize: '0.875rem',
        fontWeight: '500'
      }
    },
    commentBtn: {
      marginTop: 25,
      marginBottom: 40,
      textTransform: 'none',
      textAlign: 'center',
      fontSize: '1rem',
      backgroundColor: theme.palette.button.normal.backgroundColor,
      color: theme.palette.button.normal.color,
      '&:hover': {
        backgroundColor: theme.palette.button.hover.backgroundColor,
        color: theme.palette.button.hover.color
      },
      '@media (max-width: 950px)': {
        marginTop: '0',
        marginBottom: '1.5rem'
      },
      title: {
        textAlign: 'left important!',
        submit: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }
    }
  }});
