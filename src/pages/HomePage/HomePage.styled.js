import styled from 'styled-components';
import { devices } from 'constants';

export const StyledHomeBox = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding-bottom: 32px;
`;

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const StyledHeroAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 30px;
  background: var(--grey-bg);
  padding: 24px 16px;
  width: 100%;

  @media ${devices.tablet} {
    padding: 49px 32px;
  }

  @media ${devices.desktop} {
    align-items: flex-start;
    width: 720px;
    padding: 98px 64px;
  }
`;

export const StyledHeroTitle = styled.h1`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.96px;
  text-align: center;

  margin-bottom: 32px;

  @media ${devices.desktop} {
    text-align: left;
    width: 548px;
  }
`;

export const StyledHeroTitleAccent = styled.span`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  display: inline-block;
  width: 200px;

  border-radius: 12px;
  background-color: var(--common);
`;

export const StyledHeroAboutText = styled.p`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.37;
  text-align: center;
  letter-spacing: -0.32px;
  margin-bottom: 32px;

  @media ${devices.desktop} {
    width: 471px;
    text-align: left;
    margin-bottom: 64px;
  }
`;

export const StyledHeroImg = styled.img``;

export const StyledStatListBox = styled.div`
  border-radius: 30px;
  border: 1.5px dashed var(--accent);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;

  gap: 24px;
  padding: 40px 20px;

  @media ${devices.tablet} {
    width: 100%;
    gap: 40px;
  }

  @media ${devices.desktop} {
    padding: 40px 120px;
    gap: 100px;
  }
`;
export const StyledStatItem = styled.li`
  display: flex;
  gap: 16px;
`;

export const StyledStatNumber = styled.p`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
`;

export const StyledStatText = styled.p`
  width: 86px;
  color: var(--black-70);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
`;
