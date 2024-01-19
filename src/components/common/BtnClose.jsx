import React from 'react';

import { Button } from './BtnClose.styled';

export const BtnClose = ( { children, xlTop, xlRight, mdTop, mdRight, smTop, smRight, click, ...props } ) => {
  return (
    <Button
      type="button"
      $xlRight={ xlRight }
      $xlTop={ xlTop }
      $mdRight={ mdRight }
      $mdTop={ mdTop }
      $smRight={ smRight }
      $smTop={ smTop }
      onClick={ click }
      { ...props }
    >
      {children}
    </Button>
  );
};
