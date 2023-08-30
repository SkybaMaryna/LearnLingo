import styled from 'styled-components';
import { devices } from 'constants';

export const StyledAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 255px;
  justify-content: flex-start;

  @media ${devices.tablet} {
    min-width: min-content;
    justify-content: center;
  }
`;

export const StyledCongrats = styled.p`
  color: var(--black);
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;
