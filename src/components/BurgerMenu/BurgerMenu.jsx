import { nanoid } from '@reduxjs/toolkit';
import { CgClose } from 'react-icons/cg';
import {
  StyledBurgerBox,
  StyledBurgerBtn,
  StyledBurgerContent,
  StyledBurgerLink,
  StyledBurgerList,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ items, isBrgOpen, setIsBrgOpen }) => {
  return (
    <StyledBurgerBox
      className={isBrgOpen ? 'burgerMenuBox active' : 'burgerMenuBox'}
      onClick={() => setIsBrgOpen(false)}
    >
      <StyledBurgerContent onClick={e => e.stopPropagation()}>
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
