import { makeStyles } from '@material-ui/core';

export const scrollBarStyles = makeStyles(() => ({
  scrollBar: ({ isDarkSection }) => ({
    boxSizing: 'border-box',
    display: 'block',
    position: 'fixed',
    left: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    '@media (max-width: 768px)': {
      display: 'none'
    },
    '&:before': {
      content: `''`,
      position: 'absolute',
      display: 'block',
      height: isDarkSection ? '3px' : '1px',
      width: '200px',
      top: '50%',
      left: '-95px',
      backgroundColor: isDarkSection ? '#fff' : '#000',
      transform: 'rotate(90deg)',
      border: '1px solid black'
    }
  }),
  scrollBarItem: ({ isDarkSection }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    transition: 'height  .2s ease',
    cursor: 'pointer',
    '&:hover': {
      height: '50px'
    },
    '&:hover > :last-child': {
      display: 'inline'
    },
    '& > :first-child[data-id=true]': {
      backgroundColor: isDarkSection ? '#000' : '#fff',
      border: `1px solid ${isDarkSection ? '#fff' : '#000'}`
    }
  }),
  sectionTitle: ({ isDarkSection }) => ({
    color: isDarkSection ? '#fff' : '#000',
    textTransform: 'uppercase',
    textDecoration: 'underline',
    display: 'none',
    backgroundColor: isDarkSection ? '#00000020' : '#ffffff80',
    padding: '5px'
  }),
  sectionPoint: ({ isDarkSection }) => ({
    backgroundColor: isDarkSection ? '#fff' : '#000',
    border: `1px solid ${isDarkSection ? '#000' : '#fff'}`,
    width: 10,
    height: 10,
    position: 'relative',
    borderRadius: '50%',
    marginRight: 20
  }),
  selectedSection: () => ({}),
  fixedBurgerMenu: ({ isDarkSection }) => ({
    color: isDarkSection ? '#fff' : '#000',
    position: 'fixed',
    top: '10px',
    left: '12px',
    zIndex: 20
  })
}));
