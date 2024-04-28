import React from 'react';
import navBarItems from './navBarItems';
import * as S from './NavBar.styled'


const NavBar = () => {
  return (
    <S.Navigation>
    <S.NavBarList>
        {navBarItems.map( ( { icon, title, path } ) => {
          return <li key={ path }>
            {/* { icon } */}
            <S.StyledLink to={ path }>{ title }</S.StyledLink>
          </li>
        } )}
      </S.NavBarList>
    </S.Navigation>
  )
}

export default NavBar
