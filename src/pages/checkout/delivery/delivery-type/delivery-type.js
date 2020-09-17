import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Backdrop
} from '@material-ui/core';
import { useStyles } from '../../checkout.styles';
import {
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_DROP_LIST,
  CHECKOUT_TEXT_FIELDS
} from '../../../../translations/checkout.translations';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse
} from '../../../../redux/checkout/checkout.actions';
import ContactsPage from '../../../contacts';

const DeliveryType = ({ deliveryType, setDeliveryType }) => {
  const style = useStyles();
  const { language, loading } = useSelector(({ Language, Checkout }) => ({
    language: Language.language,
    loading: Checkout.loading
  }));
  let { cities, warehouses } = useSelector(({ Checkout }) => ({
    cities: Checkout.cities,
    warehouses: Checkout.warehouses
  }));
  cities = cities.map((citi) => citi.Description);
  warehouses = warehouses.map((warehouse) => warehouse.Description);

  const [department, setDepartment] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNovaPoshtaCities(city));
  }, [dispatch, city]);

  // useEffect(() => {
  //   dispatch(getNovaPoshtaWarehouse(department));
  // }, [dispatch, department]);

  const selectHandlerDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const selectHandlerRegion = (event) => {
    setRegion(event.target.value);
  };

  const selectHandlerDelivery = (event) => {
    setDeliveryType(event.target.value);
  };

  const selectHandlerCity = (event) => {
    setCity(event.target.value);
  };

  const departments = [];
  const regions = ['Lviv', 'Kyiv', 'Odesa'];

  const deliveries = [
    CHECKOUT_DELIVERY_TYPES[language].selfPickUP,
    CHECKOUT_DELIVERY_TYPES[language].novaPoshta,
    CHECKOUT_DELIVERY_TYPES[language].ukrPoshta,
    CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta
  ];

  const novaPoshta = (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>{CHECKOUT_DROP_LIST[language].department}</InputLabel>
        <Select
          value={department}
          onChange={selectHandlerDepartment}
          label='department'
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

  const ukrPoshta = (
    <div className={style.contactField}>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>Region</InputLabel>
        <Select value={region} onChange={selectHandlerRegion} label='region'>
          {regions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={style.dataInput}>
        <InputLabel>Department</InputLabel>
        <Select
          value={department}
          onChange={selectHandlerDepartment}
          label='department'
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

  const currier = (
    <div className={style.contactField}>
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].street}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].building}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].apartment}
        variant='outlined'
        className={style.dataInputCurrier}
      />
    </div>
  );

  const deliverySwitcher = () => {
    switch (deliveryType) {
      case CHECKOUT_DELIVERY_TYPES[language].novaPoshta:
        return novaPoshta;
      case CHECKOUT_DELIVERY_TYPES[language].ukrPoshta:
        return ukrPoshta;
      case CHECKOUT_DELIVERY_TYPES[language].currierNovaPoshta:
        return currier;
      default:
    }
  };

  return (
    <div>
      <div className={style.contactField}>
        <FormControl variant='outlined' className={style.dataInput}>
          <InputLabel>{CHECKOUT_DROP_LIST[language].deliveryType}</InputLabel>
          <Select
            value={deliveryType}
            onChange={selectHandlerDelivery}
            label='deliveryType'
          >
            {deliveries.map((delivery) => (
              <MenuItem key={delivery} value={delivery}>
                {delivery}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {deliveryType &&
          (deliveryType === CHECKOUT_DELIVERY_TYPES[language].selfPickUP ? (
            <ContactsPage />
          ) : (
            <Autocomplete
              options={cities}
              getOptionLabel={(option) => option}
              className={style.dataInput}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(event) => selectHandlerCity(event)}
                  label='Місто'
                  variant='outlined'
                />
              )}
            />
          ))}
      </div>
      {deliverySwitcher()}
    </div>
  );
};

export default DeliveryType;
