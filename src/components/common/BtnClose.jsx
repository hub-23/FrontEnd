import React from 'react';

import { IconSvg } from './IconSvg';
import { Button } from './BtnClose.styled';

export const BtnClose = ( { right, top, click } ) => {
  return (
    <Button type="button" $right={ right } $top={ top } onClick={ click }>
      <IconSvg width="60px" height="60px" icon="icon-close" />
    </Button>
  );
};
