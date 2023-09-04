import styled from 'styled-components';
import { devices } from 'constants';

export const StyledFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;

  padding: 32px 16px;

  @media ${devices.tablet} {
    padding: 12px 36px;
  }
`;
export const StyledFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledFilterPlaceholder = styled.div`
  color: var(--grey-txt);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  padding-left: 12px;
`;

export const StyledInputBox = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  height: 40px;
  padding: 14px 18px;
  align-items: center;
  border-radius: 14px;
  background: var(--white);

  color: var(--black);
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1.11;
  cursor: pointer;
`;

export const StyledOpenSelectBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const StyledDropdownList = styled.ul`
  position: absolute;
  z-index: 50;
  top: 54px;
  left: 0;
  width: 100%;

  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 16px;
  border-radius: 12px;
  background: var(--white);

  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  transition: opacity var(--time-dur-func), transform var(--time-dur-func);

  &.active {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }

  &.hidden {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
