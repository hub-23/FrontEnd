import React from 'react';

import { Button } from './BtnEye.styled';

export const IconBtn = ( {
  children,
  xlRight,
  xlTop,
  mdRight,
  mdTop,
  smRight,
  smTop,
  click,
} ) => {
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
    >
      {children}
    </Button>
  );
};
