import React from 'react';
import * as S from './Navbar.styled';
import profile from '../../assets/student/profile.png';
// import profile2 from '../../assets/student/profile2.png';
import calendar from '../../assets/student/calendar.png';
// import calendar2 from '../../assets/student/calendar2.png';
import logout from '../../assets/student/logout.png';

export const Navbar = () => {

	return (
        <S.Wrapper>
            <ul>
                <S.StyledNavLink to='/student/info'>
                    <S.Image src={ profile } alt=''/>
                    <S.Title>Особиста інформація</S.Title> 
                </S.StyledNavLink>
                <S.StyledNavLink to='/student/reservation'>
                    <S.Image src={ calendar } alt=''/>
                    <S.Title> Мої бронювання</S.Title>
                </S.StyledNavLink>
                <S.StyledNavLink to='/student/out'>
                    <S.Image src={ logout } alt=''/>
                    <S.Title>Вийти</S.Title>
                </S.StyledNavLink>
            </ul>
            <S.Line/>
        </S.Wrapper>
	)
}
