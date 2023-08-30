import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { devices } from 'constants';

export const StyledForm = styled(Formik)``;
export const StyledFormInsight = styled(Form)`
  width: 100%;
  max-width: 438px;
  min-width: 100px;
`;
export const StyledTitle = styled.h2`
  color: var(--black);
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  color: var(--black-80);
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 40px;
`;

export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-bottom: 40px;
`;

export const StyledAiOutlineEye = styled(AiOutlineEye)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;
export const StyledAiOutlineEyeInvisible = styled(AiOutlineEyeInvisible)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledInput = styled(Field)`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;

  /* width: 100%; */
  border-radius: 12px;
  outline: none;
  border: 1px solid rgba(18, 20, 23, 0.1);

  color: var(--main-black);
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;

  &:focus,
  &:hover {
    border: 1px solid var(--accent);
  }
  &.valid-border {
    border-color: green;
    outline: none;
    background-color: transparent;
  }
  &.invalid-border {
    border-color: red;
    outline: none;
    background-color: transparent;
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  justify-content: center;
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: calc (18 / 14);
  margin-bottom: 14px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }

  @media ${devices.tablet} {
    padding: 18px 169px;
    font-size: 16px;
    line-height: calc (18 / 16);
  }
`;

export const StyledPasswordDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
