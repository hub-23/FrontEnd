import React from 'react';
import { Link } from 'react-router-dom';
import Language from './Select/Language/Language';
import { StyledHeader } from './Header.styled';
import logo from '../../assets/home/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <img src={ logo } alt='HUB23'/>
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
