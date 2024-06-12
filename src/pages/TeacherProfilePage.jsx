import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/TeacherProfilePage/Navbar/Navbar';
import * as S from './TeacherProfilePage.styled';

const TeacherProfilePage = () => {
  return (
    <S.ContainerPage>
      <S.Wrap>
        <Navbar />

        <S.Content>
          <Outlet />
        </S.Content>
      </S.Wrap>
    </S.ContainerPage>
  );
};

export default TeacherProfilePage;
