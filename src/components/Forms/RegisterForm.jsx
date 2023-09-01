import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledAiOutlineEye,
  StyledAiOutlineEyeInvisible,
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledInput,
  StyledInputWrap,
  StyledPasswordDiv,
  StyledText,
  StyledTitle,
} from './Forms.styled';
import { RegisterSchema } from './ValidationSchema';
import { logUpThunk } from 'redux/auth/authOperations';
import { Button } from 'components';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledForm
      initialValues={{
        login: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={values => {
        dispatch(logUpThunk(values));
      }}
    >
      {({ errors, touched, handleChange, setFieldTouched }) => (
        <StyledFormInsight>
          <StyledTitle>Registration</StyledTitle>
          <StyledText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </StyledText>

          <StyledInputWrap>
            <StyledInput
              type="text"
              name="login"
              placeholder="Name"
              onChange={e => {
                setFieldTouched('login');
                handleChange(e);
              }}
              className={
                touched.login && !errors.login
                  ? 'valid-border'
                  : errors.login && touched.login
                  ? 'invalid-border'
                  : ''
              }
            />
            {errors.login && touched.login ? (
             <StyledError>{errors.login}</StyledError>
           ) : null}
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => {
                setFieldTouched('email');
                handleChange(e);
              }}
              className={
                touched.email && !errors.email
                  ? 'valid-border'
                  : errors.email && touched.email
                  ? 'invalid-border'
                  : ''
              }
            />
            {errors.email && touched.email ? (
             <StyledError>{errors.email}</StyledError>
           ) : null}
            <StyledPasswordDiv>
              <StyledInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={e => {
                  setFieldTouched('password');
                  handleChange(e);
                }}
                placeholder="Password"
                className={
                  touched.password && !errors.password
                    ? 'valid-border'
                    : errors.password && touched.password
                    ? 'invalid-border'
                    : ''
                }
              />
              {touched.password && !showPassword ? (
                <StyledAiOutlineEyeInvisible
                  color="var(--black)"
                  onClick={() => {
                    setShowPassword(prev => !prev);
                  }}
                />
              ) : touched.password && showPassword ? (
                <StyledAiOutlineEye
                  color="var(--black)"
                  onClick={() => {
                    setShowPassword(prev => !prev);
                  }}
                />
              ) : (
                ''
              )}
            </StyledPasswordDiv>
            {errors.password && touched.password ? (
             <StyledError>{errors.password}</StyledError>
           ) : null}
          </StyledInputWrap>

          <Button type="submit" text="Sign Up" />
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};
