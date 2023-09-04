import { nanoid } from '@reduxjs/toolkit';
import { CgClose } from 'react-icons/cg';
import {
  StyledBurgerBox,
  StyledBurgerBtn,
  StyledBurgerContent,
  StyledBurgerLink,
  StyledBurgerList,
} from './BurgerMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { Auth } from 'components';

export const BurgerMenu = ({ items, isBrgOpen, setIsBrgOpen }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  isBrgOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return (
    <StyledBurgerBox
      className={isBrgOpen ? 'active' : ''}
      onClick={() => setIsBrgOpen(false)}
    >
      <StyledBurgerContent onClick={e => e.stopPropagation()}>
        {isMobile && <Auth />}
        <nav>
          <StyledBurgerList>
            {items.map(item => {
              if (!item.isShown) {
                return null;
              }
              return (
                <li key={nanoid()}>
                  <StyledBurgerLink
                    to={item.goTo}
                    onClick={() => setIsBrgOpen(false)}
                  >
                    {item.value}
                  </StyledBurgerLink>
                </li>
              );
            })}
          </StyledBurgerList>
        </nav>
        <StyledBurgerBtn type="button" onClick={() => setIsBrgOpen(false)}>
          <CgClose size={20} color="black" />
        </StyledBurgerBtn>
      </StyledBurgerContent>
    </StyledBurgerBox>
  );
};
