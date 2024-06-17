import { useState } from 'react';

export const useTest = initIsVisible => {
  const [ isTest, setIsTest ] = useState( initIsVisible );

  return { isTest, setIsTest };
};
