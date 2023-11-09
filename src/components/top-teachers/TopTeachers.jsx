import React from 'react'
import TopTeachersList from './TopTeachersList'

import * as S from './TopTeachers.styled.js'

const TopTeachers = () => {
    return (
        <S.Layout className="teachers-block">
            <S.Title> Топові викладачі </S.Title>
            <S.Button> Обрати викладача </S.Button>
            <S.ButtonPause> Стоп / Продовжити </S.ButtonPause>
            <TopTeachersList />
        </S.Layout>
    )
}
export default TopTeachers
