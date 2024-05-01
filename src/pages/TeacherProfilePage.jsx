import NavBar from 'components/TeacherProfilePage/NavBar/NavBar';
import React from 'react'
import { Outlet } from 'react-router';

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 144px;
    gap: 57px;
    margin-bottom: 80px;
`;
export const Content = styled.div`
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
