// K-Basket
export const toggleState = ( state, setState ) => {
  return () => {
    setState( !state );
  };
};
