import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import { useStyles } from './product-features.styles';
import {
  ADD_FEATURES,
  PRODUCT_BOTTOM,
  SELECT_NONE
} from '../../../translations/product-details.translations';
import { setProductToSend } from '../../../redux/products/products.actions';

const ProductFeatures = ({ bottomMaterials, additions, currencySign }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { language, totalPrice, bagBottom, sidePocket, currency } = useSelector(
    ({ Language, Currency, Products: { productToSend } }) => ({
      language: Language.language,
      totalPrice: productToSend.totalPrice,
      sidePocket: productToSend.sidePocket.isSelected,
      bagBottom: productToSend.bagBottom.value,
      currency: Currency.currency
    })
  );

  const { additionalPrice, name: additionalName } =
    additions && additions.length ? additions[0] : {};

  const additionsNameToSend = useMemo(
    () => (additions && additions.length ? additions[0].name : null),
    [additions]
  );

  const handleBottomChange = (event) => {
    const { value } = event.target;

    const oldPrice = bagBottom
      ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
          .additionalPrice[currency].value / 100
      : 0;

    const newPrice = value
      ? bottomMaterials.find(({ name }) => name[1].value === value)
          .additionalPrice[currency].value / 100
      : 0;

    const newTotalPrice = totalPrice - oldPrice + newPrice;

    const bottomNameToSend = value
      ? bottomMaterials.find(({ name }) => name[1].value === value).name
      : '';

    dispatch(
      setProductToSend({
        totalPrice: +newTotalPrice.toFixed(2),
        bagBottom: { value, name: bottomNameToSend }
      })
    );
  };

  const handlePocketChange = (event) => {
    const { checked } = event.target;
    let newPrice;

    if (!sidePocket) {
      newPrice = totalPrice + additionalPrice[currency].value / 100;
    } else {
      newPrice = totalPrice - additionalPrice[currency].value / 100;
    }

    dispatch(
      setProductToSend({
        totalPrice: +newPrice.toFixed(2),
        sidePocket: { isSelected: checked, additionsNameToSend }
      })
    );
  };

  const menuItems = bottomMaterials
    ? bottomMaterials.map((material) => (
        <MenuItem value={material.name[1].value} key={material._id}>
          <span>
            {material.name[language].value}{' '}
            {material.additionalPrice[0].value ? (
              <span className={styles.selectPrice}>
                +
                <FontAwesomeIcon icon={currencySign} />
                {(material.additionalPrice[currency].value / 100).toFixed()}
              </span>
            ) : null}
          </span>
        </MenuItem>
      ))
    : null;

  return (
    <div>
      {menuItems ? (
        <div>
          <span className={styles.label}>
            {ADD_FEATURES[language].features}:{' '}
          </span>
          <div className={styles.featuresForm}>
            <div className={styles.feature}>
              <FormControl
                data-cy='productSelect'
                className={styles.formControl}
              >
                <InputLabel>{PRODUCT_BOTTOM[language].bagBottom}</InputLabel>
                <Select
                  value={bagBottom}
                  onChange={handleBottomChange}
                  autoWidth
                >
                  <MenuItem value='' key='none'>
                    {SELECT_NONE[language].none}
                  </MenuItem>
                  {menuItems}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      ) : null}
      {additionalPrice ? (
        <div className={styles.checkbox}>
          <FormControlLabel
            control={
              <Checkbox checked={sidePocket} onChange={handlePocketChange} />
            }
            label={
              <span>
                {additionalName[language].value}{' '}
                <span className={styles.selectPrice}>
                  +
                  <FontAwesomeIcon icon={currencySign} />
                  {additionalPrice[currency].value / 100}
                </span>
              </span>
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductFeatures;
