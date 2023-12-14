import React from 'react';
import { StyledHeroButton } from './HeroButton.styled';

export const HeroButton = ( { children, size, color, dataStatus, onActiveModal } ) => {
  return (
    <StyledHeroButton size={ size } color={ color } onClick={ onActiveModal } data-status={ dataStatus }>
      {children}
    </StyledHeroButton>
  );
};
