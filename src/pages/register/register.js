import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formRegExp, REGISTER_USER_DATA } from '../../configs';
import {
  errorMessages,
  REGISTER_FORM_LABEL,
  LOGIN_FORM_LABEL,
  placeholders,
  CONFIRM_EMAIL,
  REGISTER_USER_ERROR
} from '../../translations/user.translations';
import { useStyles } from './register.styles';
import infoImg from '../../images/information.png';
import infoLightImg from '../../images/info-light.png';
import { endAdornment } from '../../utils/eyeToggle';
import { Loader } from '../../components/loader/loader';
import { registerUser } from '../../redux/user/user.actions';

function Register() {
  // VALIDATED && CONFIRMED
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [lastNameValidated, setLastNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(true);
  const [shouldValidate, setShouldValidate] = useState(false);

  // USER VALUES
  const [user, setUser] = useState(REGISTER_USER_DATA);
  const { firstName, lastName, confirmPassword, email, password } = user;

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(true);

  // HANDLERS
  const handleChange = (event, setValid, regExp) => {
    const input = event.target.value;
    const inputName = event.target.name;
    setUser({ ...user, [inputName]: input });
    if (input.match(regExp)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleRegister = async () => {
    setShouldValidate(true);
    if (allFieldsValidated) {
      delete user.confirmPassword;
      dispatch(registerUser({ user, language }));
    }
  };

  const checkIfConfirmed = (e, setConfirm) => {
    const confirmedInput = e.target.value;
    const inputName = e.target.name;
    setUser({ ...user, [inputName]: confirmedInput });
    if (confirmedInput === password) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  };

  // HOOKS
  const {
    isLightTheme,
    language,
    hasRegistered,
    registerError,
    loading
  } = useSelector(({ Theme, Language, User }) => ({
    isLightTheme: Theme.lightMode,
    language: Language.language,
    loading: User.userLoading,
    registerError: User.error,
    hasRegistered: User.userRegistered
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    // VALID FIELDS
    if (
      firstNameValidated &&
      lastNameValidated &&
      emailValidated &&
      passwordValidated &&
      isConfirmedPassword
    ) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [
    firstNameValidated,
    lastNameValidated,
    emailValidated,
    passwordValidated,
    isConfirmedPassword
  ]);

  // STYLES
  const styles = useStyles();

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages[language].value.firstname,
      value: firstName,
      onChange: handleChange,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    lastNameField: {
      inputName: 'lastName',
      errorMessage: errorMessages[language].value.lastname,
      value: lastName,
      onChange: handleChange,
      validation: {
        value: lastNameValidated,
        setValid: setLastNameValidated
      },
      type: 'text',
      regExp: formRegExp.name
    },
    email: {
      inputName: 'email',
      errorMessage: errorMessages[language].value.email,
      value: email,
      onChange: handleChange,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: 'text',
      regExp: formRegExp.email
    },
    passwordField: {
      inputName: 'password',
      errorMessage: errorMessages[language].value.password,
      value: password,
      onChange: handleChange,
      validation: {
        value: passwordValidated,
        setValid: setPasswordValidated
      },
      type: 'password',
      InputProps: endAdornment(showPassword, setShowPassword),
      regExp: formRegExp.password
    },
    confirmPasswordField: {
      inputName: 'confirmPassword',
      errorMessage: errorMessages[language].value.confirmPassword,
      value: confirmPassword,
      onChange: checkIfConfirmed,
      validation: {
        value: isConfirmedPassword,
        setValid: setIsConfirmedPassword
      },
      type: 'password',
      InputProps: endAdornment(showConfirmedPassword, setShowConfirmedPassword)
    }
  };

  const successWindow = (
    <form className={styles.registerForm}>
      <div>
        <img
          src={isLightTheme ? infoImg : infoLightImg}
          alt='info'
          className={styles.infoLogo}
        />
        <p className={styles.successText}>{CONFIRM_EMAIL[language].value}</p>
      </div>
    </form>
  );

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        {hasRegistered ? (
          successWindow
        ) : (
          <form className={styles.registerForm}>
            {loading ? (
              <Loader />
            ) : (
              <>
                <h2 className={styles.heading}>
                  {REGISTER_FORM_LABEL[language].value}
                </h2>
                {Object.values(userFields).map(
                  ({
                    inputName,
                    errorMessage,
                    value,
                    onChange,
                    validation,
                    type,
                    InputProps = null,
                    regExp = null
                  }) => (
                    <TextField
                      InputProps={{
                        endAdornment: InputProps && InputProps.endAdornment
                      }}
                      required
                      key={placeholders[inputName][language].value}
                      label={placeholders[inputName][language].value}
                      variant='outlined'
                      name={inputName}
                      fullWidth
                      error={!validation.value && shouldValidate}
                      helperText={
                        !validation.value && shouldValidate
                          ? `${errorMessage}`
                          : ''
                      }
                      className={`${styles.dataInput} ${
                        inputName === 'email' && styles.afterText
                      }`}
                      onChange={(e) => onChange(e, validation.setValid, regExp)}
                      value={value}
                      type={type}
                    />
                  )
                )}
                <div className={styles.registerGroup}>
                  <Button
                    className={styles.registerBtn}
                    fullWidth
                    onClick={handleRegister}
                  >
                    {REGISTER_FORM_LABEL[language].value}
                  </Button>
                  <p className={styles.registerError}>
                    {registerError
                      ? REGISTER_USER_ERROR[registerError]
                        ? REGISTER_USER_ERROR[registerError][language].value
                        : REGISTER_USER_ERROR.DEFAULT_ERROR[language].value
                      : ''}
                  </p>
                </div>
                <div>
                  <Link to='/login' className={styles.loginBtn}>
                    {LOGIN_FORM_LABEL[language].value}
                  </Link>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
