import styled from 'styled-components';
import { devices } from 'constants';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 16px;

  @media ${devices.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 16px;

    padding: 30px 64px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media ${devices.desktop} {
    justify-content: space-between;
    gap: 268px;
  }
`;

export const StyledNav = styled.nav`
  display: none;

  @media ${devices.desktop} {
    display: block;
  }
`;

export const StyledNavList = styled.ul`
  display: none;

  @media ${devices.desktop} {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 28px;
  }
`;

export const StyledNavLink = styled.li`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.25;

  transition: transform var(--time-dur-func);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const StyledNavLinkItem = styled(NavLink)`
  &.active {
    position: relative;
    font-weight: 500;
    color: var(--accent);
    &::before {
      position: absolute;

      display: inline-block;
      content: '';

      width: 100%;
      height: 4px;
      top: 20px;
      background: var(--accent);
      border-radius: 2px;
    }
  }
`;

export const StyledBrgBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  cursor: pointer;

  transition: transform var(--time-dur-func);

  @media ${devices.desktop} {
    display: none;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
