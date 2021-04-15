import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './number-input.styles';
import { TYPES_CONST } from '../../const/types-consts';
import { TEXT_FIELD_VARIANT } from '../../const/material-ui';

const NumberInput = ({ onChangeQuantity, quantity, setInputValue }) => {
  const styles = useStyles();
  const setQuantityFromInput = (e) => {
    let num;
    if (e.target.value < 1) {
      num = 1;
    } else {
      num = e.target.value;
    }
    setInputValue(Number(num));
    onChangeQuantity(Number(num));
  };

  return (
    <div className={styles.root} data-cy='cart-item-quantity'>
      <Button
        className={styles.button}
        onClick={() => {
          onChangeQuantity(quantity - 1);
          setInputValue(quantity - 1);
        }}
        disabled={quantity <= 1}
      >
        <RemoveIcon />
      </Button>
      <TextField
        type={TYPES_CONST.STRING}
        value={quantity}
        id='filled-basic'
        variant={TEXT_FIELD_VARIANT.OUTLINED}
        onChange={setQuantityFromInput}
        inputProps={{ style: { textAlign: 'center', width: '25px', height: '15px' } }}
      />
      <Button
        className={styles.button}
        onClick={() => {
          onChangeQuantity(quantity + 1);
          setInputValue(quantity + 1);
        }}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default NumberInput;
