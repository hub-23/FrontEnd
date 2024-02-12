export const scrollOnOff = bool => {
  if ( bool ) {
    return ( document.body.style.overflow = 'hidden' ); // stop scroll
  }

  document.body.style.overflow = 'visible'; // re scroll
};
