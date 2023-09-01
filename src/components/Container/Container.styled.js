import styled from 'styled-components';
import { devices } from 'constants';

export const StyledContainer = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  padding: 0px 16px;

  @media ${devices.tablet} {
    padding: 0px 32px;
  }

  @media ${devices.desktop} {
    width: 1440px;
    padding: 0px 64px;
  }
`;
