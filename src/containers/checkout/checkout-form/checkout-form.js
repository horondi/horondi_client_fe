import React from 'react';
import { useFormik } from 'formik';
import { Grid, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_ERROR,
  CHECKOUT_PAYMENT,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../translations/checkout.translations';
import { useStyles } from './checkout-form.styles';
import { formRegExp } from '../../../configs';

const CheckoutForm = ({ language, isLightTheme }) => {
  const styles = useStyles({
    isLightTheme
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, CHECKOUT_ERROR[language].firstName)
      .max(20, CHECKOUT_ERROR[language].firstName)
      .required(CHECKOUT_ERROR[language].requiredField),
    lastName: Yup.string()
      .min(2, CHECKOUT_ERROR[language].lastName)
      .max(20, CHECKOUT_ERROR[language].lastName)
      .required(CHECKOUT_ERROR[language].requiredField),
    email: Yup.string()
      .email(CHECKOUT_ERROR[language].email)
      .required(CHECKOUT_ERROR[language].requiredField),
    phoneNumber: Yup.string()
      .matches(formRegExp.phoneNumber, CHECKOUT_ERROR[language].phoneNumber)
      .required(CHECKOUT_ERROR[language].requiredField),
    paymentMethod: Yup.string().required(
      CHECKOUT_ERROR[language].requiredField
    ),
    userComment: Yup.string()
      .min(2, CHECKOUT_ERROR[language].userComment)
      .max(300, CHECKOUT_ERROR[language].userComment)
      .required(CHECKOUT_ERROR[language].requiredField)
  });
  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    validationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      paymentMethod: '',
      userComment: ''
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.root}>
        <Grid item xs={12}>
          <div className={styles.checkoutFormContainer}>
            <div className={styles.contactInfoWrapper}>
              <h2 className={styles.contactInfoTitle}>
                {CHECKOUT_TITLES[language].contactInfo}
              </h2>
              <div className={styles.contactInfoFields}>
                <TextField
                  size='small'
                  id='outlined-basic'
                  data-cy='firstName'
                  name='firstName'
                  className={styles.textField}
                  variant='outlined'
                  label={CHECKOUT_TEXT_FIELDS[language].firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  error={touched.firstName && !!errors.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.firstName}
                  </div>
                )}
                <TextField
                  size='small'
                  id='standard-start-adornment'
                  data-cy='lastName'
                  name='lastName'
                  className={styles.textField}
                  variant='outlined'
                  label={CHECKOUT_TEXT_FIELDS[language].lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  error={touched.lastName && !!errors.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.contactInfoFields}>
              <TextField
                size='small'
                id='standard-start-adornment'
                data-cy='email'
                name='email'
                className={styles.textField}
                variant='outlined'
                label={CHECKOUT_TEXT_FIELDS[language].email}
                value={values.email}
                onChange={handleChange}
                error={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <div data-cy='code-error' className={styles.error}>
                  {errors.email}
                </div>
              )}
              <TextField
                size='small'
                id='standard-start-adornment'
                data-cy='phoneNumber'
                name='phoneNumber'
                className={styles.textField}
                variant='outlined'
                label={CHECKOUT_TEXT_FIELDS[language].contactPhoneNumber}
                value={values.phoneNumber}
                onChange={handleChange}
                error={touched.phoneNumber && !!errors.phoneNumber}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <div data-cy='code-error' className={styles.error}>
                  {errors.phoneNumber}
                </div>
              )}
            </div>
            <div className={styles.contactPaymentInfo}>
              <h2
                className={`${styles.contactInfoTitle} ${styles.paymentTitle}`}
              >
                {CHECKOUT_TITLES[language].payment}
              </h2>
              <FormControl variant='outlined' className={styles.formControl}>
                <InputLabel variant='outlined'>
                  {CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                </InputLabel>
                <Select
                  label={CHECKOUT_TEXT_FIELDS[language].paymentMethod}
                  className={styles.paymentSelect}
                  data-cy='paymentMethod'
                  name='paymentMethod'
                  error={touched.paymentMethod && !!errors.paymentMethod}
                  value={values.paymentMethod || []}
                  onChange={handleChange}
                >
                  {Object.values(CHECKOUT_PAYMENT[language]).map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
                {touched.paymentMethod && errors.paymentMethod && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.paymentMethod}
                  </div>
                )}
              </FormControl>
            </div>
            <div className={styles.contactPaymentInfo}>
              <h2 className={styles.contactInfoTitle}>
                {CHECKOUT_TITLES[language].orderComment}
              </h2>
              <div>
                <TextField
                  size='small'
                  id='outlined-multiline-static'
                  data-cy='userComment'
                  name='userComment'
                  multiline
                  rows={4}
                  className={styles.textAreaField}
                  variant='outlined'
                  value={values.userComment}
                  onChange={handleChange}
                  error={touched.userComment && !!errors.userComment}
                />
                {touched.code && errors.code && (
                  <div data-cy='code-error' className={styles.error}>
                    {errors.userComment}
                  </div>
                )}
              </div>
              <p className={styles.contactInfoAdditional}>
                {CHECKOUT_ADDITIONAL_INFORMATION[language].additionalInfo}
              </p>
            </div>
          </div>
        </Grid>
      </form>
    </div>
  );
};

CheckoutForm.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  paymentMethod: '',
  userComment: '',
  values: {},
  errors: {},
  touched: {}
};

export default CheckoutForm;
