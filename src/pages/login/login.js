import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './login.styles';
import {
  LOGIN_USER_DATA,
  formRegExp,
  errorMessages,
  cookiePolicy
} from '../../configs';
import {
  placeholders,
  OR_TEXT,
  LOGIN_FORM_LABEL,
  FORGOT_PASSWORD,
  REGISTER_PROPOSAL,
  LOGIN_USER_ERROR,
  STAY_SIGNED_IN
} from '../../translations/user.translations';
import {
  loginByGoogle,
  loginUser,
  resetState
} from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';
import { Loader } from '../../components/loader/loader';
import routes from '../../configs/routes';

const Login = () => {
  const styles = useStyles();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { pathToRecovery, pathToRegister } = routes;
  const { loginError, userLoading, language } = useSelector(
    ({ User, Language }) => ({
      loginError: User.error,
      userLoading: User.userLoading,
      language: Language.language
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const handleLogin = (user) => {
    dispatch(loginUser({ user }));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(errorMessages[language].value.email)
      .required(errorMessages[language].value.empty),
    password: Yup.string()
      .matches(formRegExp.pass, errorMessages[language].value.pass)
      .required(errorMessages[language].value.empty),
    staySignedIn: Yup.bool()
  });

  const responseGoogleSuccess = (response) => {
    dispatch(loginByGoogle({ tokenId: response.tokenId }));
  };
  const responseGoogleFailure = (response) => response;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={LOGIN_USER_DATA}
      onSubmit={handleLogin}
      validateOnChange={shouldValidate}
      validateOnBlur={shouldValidate}
    >
      {({ values, errors, isValid }) => (
        <div className={styles.container}>
          <div className={styles.background} />
          <div className={styles.wrapper}>
            <Grid
              container
              alignItems='center'
              className={styles.formWrapper}
              spacing={2}
            >
              <Grid item sm={12} md={6} lg={6} className={styles.fonWrapper} />
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Form className={styles.loginForm}>
                  {userLoading ? (
                    <Loader />
                  ) : (
                    <>
                      <h2 className={styles.heading}>
                        {LOGIN_FORM_LABEL[language].value}
                      </h2>
                      <Field
                        as={TextField}
                        label={placeholders.email[language].value}
                        className={`${styles.emailInput} ${
                          values.email ? styles.afterText : ''
                        }`}
                        fullWidth
                        variant='outlined'
                        type='text'
                        name='email'
                        color='primary'
                        error={!!errors.email}
                        helperText={!!errors.email && `${errors.email}, `}
                      />
                      <Field
                        as={TextField}
                        label={placeholders.password[language].value}
                        className={styles.passwordInput}
                        fullWidth
                        variant='outlined'
                        color='primary'
                        type='password'
                        InputProps={endAdornment(showPassword, setShowPassword)}
                        name='password'
                        error={!!errors.password}
                        helperText={errors.password || ''}
                      />
                      <div className={styles.recoveryContainer}>
                        <Link
                          to={pathToRecovery}
                          className={styles.recoveryBtn}
                        >
                          {FORGOT_PASSWORD[language].value}
                        </Link>
                      </div>
                      <div className={styles.loginGroup}>
                        <Button
                          className={styles.loginBtn}
                          fullWidth
                          type='submit'
                          onClick={() => setShouldValidate(true)}
                        >
                          {LOGIN_FORM_LABEL[language].value}
                        </Button>
                        {loginError ? (
                          <p className={styles.loginError}>
                            {LOGIN_USER_ERROR[loginError] && loginError
                              ? LOGIN_USER_ERROR[loginError][language].value
                              : LOGIN_USER_ERROR.DEFAULT_ERROR[language].value}
                          </p>
                        ) : null}
                      </div>
                      <div className={styles.orContainer}>
                        <span className={styles.orText}>
                          {OR_TEXT[language].value}
                        </span>
                      </div>
                      <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                          <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className={styles.loginBtn}
                            fullWidth
                          >
                            <span className={styles.googleLogo} />
                            Google
                          </Button>
                        )}
                        onSuccess={responseGoogleSuccess}
                        onFailure={responseGoogleFailure}
                        cookiePolicy={cookiePolicy.SINGLE_HOST_ORIGIN}
                      />
                      <div className={styles.container}>
                        <FormControlLabel
                          control={
                            <Field
                              as={Checkbox}
                              name='staySignedIn'
                              color='primary'
                              checked={values.staySignedIn}
                            />
                          }
                          label={
                            <Typography className={styles.text}>
                              {STAY_SIGNED_IN[language].value}
                            </Typography>
                          }
                        />
                      </div>
                      <div className={styles.registerContainer}>
                        <Link
                          to={pathToRegister}
                          className={styles.registerBtn}
                        >
                          {REGISTER_PROPOSAL[language].value}
                        </Link>
                      </div>
                    </>
                  )}
                </Form>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
