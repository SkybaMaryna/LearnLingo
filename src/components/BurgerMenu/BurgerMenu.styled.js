import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBurgerBox = styled.div`
  position: fixed;
  z-index: 200;

  width: 100%;
  height: 100%;
  top: 176px;

  left: 0px;

  backdrop-filter: blur(2px);
  opacity: 0;

  pointer-events: none;
  transition: opacity var(--time-dur-func);

  &.active {
    opacity: 1;
    pointer-events: all;
    transition: opacity var(--time-dur-func);
  }
`;

export const StyledBurgerContent = styled.div`
  position: relative;
  padding: 36px;
  width: 30%;
  height: 100%;
  background: var(--common);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledBurgerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledBurgerLink = styled(Link)`
  color: var(--black);
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.25;

  transform: scale(1);
  transition: transform 500ms cubic-bezier(0.39, 0.575, 0.565, 1),
    color 500ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus {
    color: var(--accent);
    transform: scale(1.3);
    transition: transform 500ms cubic-bezier(0.39, 0.575, 0.565, 1),
      color 500ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;

export const StyledBurgerBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
`;
