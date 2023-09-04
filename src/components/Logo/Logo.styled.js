import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform var(--time-dur-func);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyledLogo = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;
