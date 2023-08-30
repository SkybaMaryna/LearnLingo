import { StyledDiv } from './ContainerCenter.styled';

export const ContainerCenter = ({ children, flexDirection = 'column' }) => {
  return <StyledDiv style={{ flexDirection }}>{children}</StyledDiv>;
};
