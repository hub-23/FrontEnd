import React from 'react';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryFilter.styled';
import { CrossBtn } from '../MobileMenu/MobileMenu.styled';

export const CountrySelect = ( { onActiveModal } ) => {
  return (
    <S.CountrySelectContainer>
      <S.HeaderWrapper>
        <S.Title>Оберіть або введіть свою країну</S.Title>
        <CrossBtn
          type="button"
          aria-expanded="true"
          aria-controls="country-select"
          aria-label='select country'
          onClick={ () => onActiveModal() }
        >
          <IconSvg
            xlWidth='24px'
            xlHeight='24px'
            icon='icon-cross'
          />
        </CrossBtn>
      </S.HeaderWrapper>

      <S.Input
        type="search" // 'text' witout reset
        name="filter"
        placeholder='Введіть назву країни'
        // value={filter} - ролі не грає
        // onChange={handleChange}
      />
      <S.CountriesList>
        <li>Україна</li>
        <li>Канада</li>
        <li>Англія</li>
        <li>Чехія</li>
        <li>Словакія</li>
        <li>Литва</li>
        <li>Угорщина</li>
        <li>Норвегія</li>
        <li>Німеччина</li>
        <li>Польща</li>
        <li>США</li>
        <li>Латвія</li>
        <li>Франція</li>
        <li>Австрія</li>
        <li>Швейцарія</li>
        <li>Швеція</li>
      </S.CountriesList>
      <S.NoteWrapper>
        <S.Divider></S.Divider>
        <S.Note>
          Вибір країни допоможе відображати актуальну інформацію про викладачів або учнів поблизу
        </S.Note>
      </S.NoteWrapper>
    </S.CountrySelectContainer>
  );
};
