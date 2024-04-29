import React from 'react'
import * as S from './BookinControls .styled';


const BookinControls  = ( { chooseLessonList, selectedType } ) => {
  return (
    <S.СontrollersList>
        <S.СontrollersItems>
          <S.BtnСontroller
            onClick={ () => chooseLessonList( 'active' ) }
            isActive={ selectedType === 'active' } 
            type='button'
          >
            Активні
          </S.BtnСontroller>
        </S.СontrollersItems>
        <S.СontrollersItems>
          <S.BtnСontroller
            onClick={ () => chooseLessonList( 'inactive' ) }
            isActive={ selectedType === 'inactive' } 
            type='button'
          >
            Неактивні
          </S.BtnСontroller>
        </S.СontrollersItems>
      </S.СontrollersList>
  )
}

export default BookinControls 
