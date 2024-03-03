import React from 'react';
import { createPortal } from 'react-dom';
import { ThreeCircles } from 'react-loader-spinner';

import { Backdrop } from './Loader.styled';
import { white } from 'utils/variables.styled';

const loaderRoot = document.querySelector( '#root' );

const center = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Loader = () => {
  return createPortal(
    <Backdrop>
      <ThreeCircles
        visible={ true }
        height="100"
        width="100"
        color={ white }
        ariaLabel="three-circles-loading"
        wrapperStyle={ center }
      />
    </Backdrop>,
    loaderRoot
  );
};
