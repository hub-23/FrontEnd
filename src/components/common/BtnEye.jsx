import React from 'react';

import { Button } from './BtnEye.styled';

export const BtnEye = ( { children, right, top, click } ) => {
  return (
    <Button type="button" $right={ right } $top={ top } onClick={ click }>
      {children}
    </Button>
  );
};
