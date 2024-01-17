import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { StyledWrapper, StyledContent } from './Layout.styled';

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
