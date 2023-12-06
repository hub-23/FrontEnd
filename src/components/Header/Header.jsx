import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo/Logo';
import Language from './Select/Language/Language';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='logo'>
        <Logo />
      </Link>
      <Link to='/teacher'>Викладачі</Link>
      <Link to='/about'>Про нас</Link>
      <Link to='/feedback'>Відгуки</Link>
      <Link to='/language'>
        <Language />
      </Link>
      <Link to='/signIn'>Вхід</Link>
    </StyledHeader>
  );
};

export default Header;
