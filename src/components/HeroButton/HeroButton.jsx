import { StyledHeroButton } from './HeroButton.styled';

export const HeroButton = ({ children, size, color }) => {
  return (
    <StyledHeroButton size={size} color={color}>
      {children}
    </StyledHeroButton>
  );
};
