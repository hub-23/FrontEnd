import React from 'react';
import logo from '../../../assets/home/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <img src={ logo } alt=''/>
    </Link>
  );
};

export default Logo;
