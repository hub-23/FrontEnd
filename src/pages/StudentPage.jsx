import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/StudentPage/Navbar';
import styled from 'styled-components';
import { device } from 'utils/device';

const Container = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vw;
  margin-top: 128px;
  font-size: 30px;
  overflow: hidden;

  @media ${device.md} {
    display: block;
  }

  @media ${device.sm} {
    margin-top: 80px;
  }
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
