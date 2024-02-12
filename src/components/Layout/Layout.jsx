import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { StyledWrapper, StyledContent } from './Layout.styled';

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />

      <Suspense fallback={ <p>...Loading</p> }>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </Suspense>

      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
