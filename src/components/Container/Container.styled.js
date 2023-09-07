import styled from 'styled-components';
import { devices } from 'constants';

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0px 16px;
  margin: 0 auto;

  @media ${devices.tablet} {
    padding: 0px 32px;
  }

  @media ${devices.desktop} {
    width: 1440px;
    padding: 0px 64px;
  }
`;
