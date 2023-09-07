import { devices } from 'constants';
import styled from 'styled-components';

export const StyledTeacherItemBox = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;

  border-radius: 24px;
  background: var(--white);
  /* width: 100%; */

  padding: 12px;
  gap: 24px;

  @media ${devices.tablet} {
    flex-wrap: nowrap;
    padding: 18px;
    gap: 36px;
  }

  @media ${devices.desktop} {
    /* width: 1184px; */
    padding: 24px;
    gap: 48px;
  }
`;

export const StyledBtnDiv = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const StyledAddFavoriteBtn = styled.button`
  transition: transform var(--time-dur-func);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
export const StyledAvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 3px solid var(--common);
  background: var(--white);
`;

export const StyledAvatarImg = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 100px;
`;
export const StyledTeacherName = styled.h2`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin-top: 8px;
`;

export const StyledGreyTitle = styled.span`
  color: var(--grey-txt);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledBlackTitle = styled.span`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  font-weight: 500;
  line-height: 1.5;
`;

export const StyledPrice = styled.span`
  color: var(--green);
`;

export const StyledTeacherDescrHead = styled.div`
  display: flex;

  flex-wrap: wrap;

  margin-bottom: 32px;
  gap: 28px;

  @media ${devices.desktop} {
    width: 968px;
    justify-content: space-between;
  }
`;

export const StyledTeacherDescrHeadList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
  padding-right: 60px;
`;
export const StyledTeacherDescrHeadItem = styled.li`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  position: relative;

  &:not(:last-child)::after {
    position: absolute;
    width: 0;
    height: 16px;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);

    border: 1px solid var(--black-20);

    display: inline-block;
    content: '';
  }
`;

export const StyledTeacherOpenDescr = styled.p`
  width: 100%;
  margin-bottom: 32px;

  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  line-height: 24px;
`;

export const StyledFeedbackList = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 32px;
`;

export const StyledFeedbackItem = styled.li`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledFeedbackUser = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledFeedbackAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: var(--green);
`;

export const StyledFeedbackAuthor = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledFeedbackStars = styled.span`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  display: flex;
  gap: 8px;
`;

export const StyledReadMoreBtn = styled.button`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  background-color: inherit;
  text-decoration-line: underline;

  margin-bottom: 32px;

  transition: transform var(--time-dur-func);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyledLevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

export const StyledLevelsItem = styled.li`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid;
  border-color: var(--black-20);

  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;

  transition: background-color var(--time-dur-func),
    border-color var(--time-dur-func);

  &:hover,
  &:focus {
    background-color: var(--accent);
    border-color: transparent;
  }
`;
