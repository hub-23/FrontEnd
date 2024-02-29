import React from 'react';
import * as S from './Navbar.styled';

export const Navbar = () => {

	return (
		<ul>
			<S.StyledNavLink to='/student/info'>
                <S.Title>Особиста інформація</S.Title> 
			</S.StyledNavLink>
			<S.StyledNavLink to='/student/reservation'>
                <S.Title> Мої бронювання</S.Title>
			</S.StyledNavLink>
			<S.StyledNavLink to='/student/out'>
                <S.Title>Вийти</S.Title>
            </S.StyledNavLink>
		</ul>
	)
}
