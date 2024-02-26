import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

	return (
		<nav>
			<div>
				<NavLink to='/student/info'>Особиста інформація</NavLink>
			</div>
			<div>
				<NavLink to='/student/reservation'>Мої бронювання</NavLink>
			</div>
			<div>
				<NavLink to='/student/out'>Вийти</NavLink>
			</div>
		</nav>
	)
}
