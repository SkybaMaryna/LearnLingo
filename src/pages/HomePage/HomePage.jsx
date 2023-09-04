import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'components';
import {
  StyledHero,
  StyledHeroAbout,
  StyledHeroAboutText,
  StyledHeroTitle,
  StyledHeroTitleAccent,
  StyledHomeBox,
  StyledStatItem,
  StyledStatList,
  StyledStatListBox,
  StyledStatNumber,
  StyledStatText,
} from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledHomeBox>
        <StyledHero>
          <StyledHeroAbout>
            <StyledHeroTitle>
              Unlock your potential with the best{' '}
              <StyledHeroTitleAccent>language</StyledHeroTitleAccent> tutors
            </StyledHeroTitle>
            <StyledHeroAboutText>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </StyledHeroAboutText>
            <Button
              text="Get started"
              width="267px"
              height="60px"
              onClick={() => {
                navigate('/teachers');
              }}
            />
          </StyledHeroAbout>

          <img
            width="568px"
            height="530px"
            src={process.env.PUBLIC_URL + '/hero.png'}
            alt="face with laptop"
          />
        </StyledHero>
        <StyledStatListBox>
          <StyledStatList>
            <StyledStatItem>
              <StyledStatNumber>32,000 +</StyledStatNumber>
              <StyledStatText>Experienced tutors</StyledStatText>
            </StyledStatItem>
            <StyledStatItem>
              <StyledStatNumber>300,000 +</StyledStatNumber>
              <StyledStatText>5-star tutor reviews</StyledStatText>
            </StyledStatItem>
            <StyledStatItem>
              <StyledStatNumber>120 +</StyledStatNumber>
              <StyledStatText>Subjects taught</StyledStatText>
            </StyledStatItem>
            <StyledStatItem>
              <StyledStatNumber>200 +</StyledStatNumber>
              <StyledStatText>Tutor nationalities</StyledStatText>
            </StyledStatItem>
          </StyledStatList>
        </StyledStatListBox>
      </StyledHomeBox>
    </Container>
  );
};

export default HomePage;
