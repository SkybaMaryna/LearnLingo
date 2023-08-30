// import { devices } from 'constants';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: ${props => {
    switch (props.variant) {
      case 'dark':
      case 'transparent':
        return '16px';
      default:
        return '18px';
    }
  }};
  font-weight: 700;
  line-height: 1.2;

  background-color: ${props => {
    switch (props.variant) {
      case 'dark':
        return 'var(--black)';
      case 'transparent':
        return 'transparent';
      default:
        return 'var(--common)';
    }
  }};

  border: none;
  outline: none;
  color: ${props =>
    props.variant === 'dark' ? 'var(--white)' : 'var(--black)'};

  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};

  margin-top: ${props => (props.margintop ? props.margintop : '0px')};
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '0px')};
  transition: background-color var(--time-dur-func);

  &:hover,
  &:focus {
    background-color: ${props => {
      switch (props.variant) {
        case 'dark':
          return 'var(--black-80)';
        case 'transparent':
          return 'transparent';
        default:
          return 'var(--accent)';
      }
    }};
    color: ${props => props.variant === 'transparent' && 'var(--black-80)'};
  }
`;

export const getStyledIcon = component => styled(component)`
  width: 20px;
  height: 20px;
  stroke: var(--accent);
`;
