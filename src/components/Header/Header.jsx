import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { HiMenu } from 'react-icons/hi';
import { selectIsAuth } from 'redux/selectors';
import {
  StyledBrgBtn,
  StyledHeader,
  StyledNav,
  StyledNavLink,
  StyledNavLinkItem,
  StyledNavList,
  StyledWrapper,
} from './Header.styled';
import { Auth, BurgerMenu, Logo } from 'components';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const [isBrgOpen, setIsBrgOpen] = useState(false);
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const items = [
    { value: 'Home', goTo: '/', isShown: true },
    { value: 'Teachers', goTo: '/teachers', isShown: true },
    { value: 'Favorites', goTo: '/favorites', isShown: isAuth },
  ];

  return (
    <>
      <StyledHeader>
        <Logo />
        <StyledWrapper>
          <StyledNav>
            <StyledNavList>
              {items.map(item => {
                if (!item.isShown) return null;
                return (
                  <StyledNavLink key={nanoid()}>
                    <StyledNavLinkItem to={item.goTo}>
                      {item.value}
                    </StyledNavLinkItem>
                  </StyledNavLink>
                );
              })}
            </StyledNavList>
          </StyledNav>
          {isTablet && <Auth />}
          <StyledBrgBtn
            onClick={() => {
              setIsBrgOpen(!isBrgOpen);
            }}
          >
            <HiMenu size={28} color={`var(--accent)`} />
          </StyledBrgBtn>
        </StyledWrapper>
      </StyledHeader>
      <BurgerMenu
        items={items}
        isBrgOpen={isBrgOpen}
        setIsBrgOpen={setIsBrgOpen}
      />
    </>
  );
};
