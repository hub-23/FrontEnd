import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './Navbar.styled';
import icon from '../../assets/student/profile-circle.png';

export const Navbar = () => {

	return (
		<nav>
			<S.Section>
                <S.Title>
                    <S.Image src={ icon } alt='icon'></S.Image>
                    <NavLink to='/student/info'
                        style={ ( { isActive } ) =>
                        isActive
                        ? {
                            color: '#e3669c',
                            background: '#f9f9f9',
                            }
                        : { color: '#2d2d2d', background:  '#ffffff' }
                        }>
                        Особиста інформація
                    </NavLink>
                </S.Title>
			</S.Section>
			<S.Section>
                <S.Title>
				    <NavLink to='/student/reservation'
                        style={ ( { isActive } ) =>
                        isActive
                        ? {
                            color: '#e3669c',
                            background: '#f9f9f9',
                            }
                        : { color: '#2d2d2d', background:  '#ffffff' }
                        }>
                        Мої бронювання
                    </NavLink>
                </S.Title>
			</S.Section>
			<S.Section>
                <S.Title>
				    <NavLink to='/student/out'
                    style={ ( { isActive } ) =>
                    isActive
                    ? {
                        color: '#e3669c',
                        background: '#f9f9f9',
                        }
                    : { color: '#2d2d2d', background:  '#ffffff' }
                    }>
                        Вийти
                    </NavLink>
                </S.Title>
			</S.Section>
		</nav>
	)
}
