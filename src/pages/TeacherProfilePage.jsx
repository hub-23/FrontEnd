import NavBar from 'components/TeacherProfilePage/NavBar/NavBar';
import React from 'react'
import { Outlet } from 'react-router';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 144px;
    gap: 8px;
    margin: 0 auto;
`;
export const Content = styled.div`
    margin: 0 auto;
`;


const TeacherProfilePage = () => {
  return (
    <Container>
       <NavBar/>
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}

export default TeacherProfilePage
