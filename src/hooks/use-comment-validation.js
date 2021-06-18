import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { errorMessages, formRegExp } from '../configs';

const useCommentValidation = (isAuth, onSubmit, commentValue) => {
  const language = useSelector(({ Language }) => Language.language);
  const [shouldValidate, setShouldValidate] = useState(false);

  const emailError = errorMessages[language].value.email;
  const firstNameError = errorMessages[language].value.firstName;
  const textError = errorMessages[language].value.text;

  const guestFields = !isAuth
    ? {
      email: Yup.string().email(emailError).required(emailError),
      firstName: Yup.string()
        .matches(formRegExp.firstName, firstNameError)
        .required(firstNameError)
    }
    : {};

  const guestValues = !isAuth
    ? {
      email: '',
      firstName: ''
    }
    : {};

  const validationSchema = Yup.object({
    ...guestFields,
    text: Yup.string(textError).min(2, textError).max(700, textError).required(textError)
  });

  const initialValues = {
    ...guestValues,
    text: commentValue || ''
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    setFieldValue,
    resetForm
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: shouldValidate,
    validateOnChange: shouldValidate
  });

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    resetForm,
    values,
    errors,
    shouldValidate,
    setShouldValidate
  };
};

export default useCommentValidation;
