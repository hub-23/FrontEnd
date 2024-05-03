import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/StudentPage/Navbar';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vw;
  margin-top: 100px;
  font-size: 30px;
  overflow: hidden;
`;

const Content = styled.section`
  width: 100%;
`;

const StudentPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};

export default StudentPage;
