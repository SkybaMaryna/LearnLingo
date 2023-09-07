import styled from 'styled-components';
import { devices } from 'constants';
import { StyledDiv } from 'components/ContainerCenter/ContainerCenter.styled';

export const StyledTeachersPageBox = styled.div`
  background-color: var(--grey-bg);
  padding-bottom: 96px;
  border-radius: 24px;
`;

export const StyledTeachersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1312px;
  padding: 0 16px;

  @media ${devices.tablet} {
    padding: 0 64px;
  }
`;

export const ContainerCenterHigh = styled(StyledDiv)`
  height: 60vh;
  align-items: start;
`;
