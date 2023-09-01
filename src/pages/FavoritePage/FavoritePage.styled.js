import styled from 'styled-components';

export const StyledTeachersPageBox = styled.div`
background-color: var(--grey-bg)`


export const StyledTeachersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1312px;

  padding: 0 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 600px) {
    padding: 0 64px;
  }
`;
