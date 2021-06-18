import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useStyles } from './limit-button.styles';

const LimitButton = ({ children, ...restProps }) => {
  const styles = useStyles();

  return (
    <Box borderTop={2} borderColor='#C2C2C2' display='flex' justifyContent='center' width='100%'>
      <Button className={styles.loadBtn} variant='outlined' {...restProps}>
        {children}
      </Button>
    </Box>
  );
};

export default LimitButton;
