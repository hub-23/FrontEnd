import React from 'react';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryFilter.styled';
import { CrossBtn } from '../MobileMenu/MobileMenu.styled';
import { useHubContext } from '../../../redux/Context';

export const CountrySelect = ( { onActiveModal } ) => {
  const { selectedCountry, setSelectedCountry } = useHubContext();
  const staticCountries = [ 'Україна', 'Польща', 'Чехія', 'Франція', 'Швейцарія',
    'Німеччина', 'Велика Британія', 'Латвія', 'Литва', 'Швеція',
    'Канада', 'США', 'Словаччина', 'Австрія', 'Угорщина', 'Антигуа і Барбуда' ];

  const handleChange = ( { target: { value } } ) => {
    console.log( value );
  };
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
        type="search" // 'text' - without reset
        name="filter"
        placeholder='Введіть назву країни'
        // value={filter} - ролі не грає
        onChange={ handleChange }
      />
      <S.CountriesList>
        {staticCountries.map( ( country ) => (
          <S.CountryItem key={ country } onClick={ () => setSelectedCountry( country ) }>
            {selectedCountry === country && <S.Mark></S.Mark>}
            <p>{country}</p>
          </S.CountryItem>
        ) )}
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
