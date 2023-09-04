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
import { LoginSchema } from './ValidationSchema';
import { logInThunk } from 'redux/auth/authOperations';
import { Button } from 'components';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        dispatch(logInThunk(values));
      }}
    >
      {({ errors, touched, handleChange, setFieldTouched }) => (
        <StyledFormInsight>
          <StyledTitle>Log In</StyledTitle>
          <StyledText>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </StyledText>

          <StyledInputWrap>
            <StyledInput
              type="email"
              name="email"
              autoComplete="true"
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
                autoComplete="true"
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

          <Button type="submit" text="Log In" />
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};
