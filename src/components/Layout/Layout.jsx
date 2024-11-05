import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { StyledWrapper, StyledContent } from './Layout.styled';

const Layout = () => {
  const { isLoading } = useAuth();

  return (
    <StyledWrapper>
      {isLoading && <Loader />}

      <Header />

      <Suspense fallback={ null }>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </Suspense>

      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
