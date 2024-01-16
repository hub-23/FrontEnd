import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryFilter.styled';
import { CrossBtn } from '../MobileMenu/MobileMenu.styled';
import { useHubContext } from '../../../redux/Context';
import { fetchCountry } from '../../PeopleTrust/api';


export const CountrySelect = ( { onActiveModal } ) => {
  const { selectedCountry, setSelectedCountry } = useHubContext();
  const defaultCountries = [
    'Україна', 'Польща', 'Чехія', 'Франція', 'Швейцарія',
    'Німеччина', 'Велика Британія', 'Латвія', 'Литва', 'Швеція',
    'Канада', 'США', 'Словаччина', 'Австрія', 'Угорщина', 'Найдовша в світі назва країни',
  ];
  let storedCountries = defaultCountries;
  try {
    storedCountries = JSON.parse( localStorage.getItem( 'countries' ) ) || defaultCountries;
  } catch ( error ) {
    error.message;
  }

  const [ countries, setCountries ] = useState( storedCountries );
  const [ autocomplete, setAutocomplete ] = useState( '' );
  console.log( 'countries:', countries );

  useEffect( () => {
    localStorage.setItem( 'countries', JSON.stringify( countries ) );
  }, [ countries ] );

  const fetchData = async ( inputData ) => {
    try {
      const countryDetails = await fetchCountry( inputData );
      const { name } = countryDetails[ 0 ];
      console.log( name.common );
      const receivedData = name.common;
      const startsWithInputData = receivedData.startsWith( inputData );

      if ( startsWithInputData ) {
        setAutocomplete( receivedData );
      } else {
        console.log( `There is no country that starts with ${inputData}` );
      }
    } catch ( error ) {
      console.error( error.message );
    }
  };
  const fetchDataDebounced = _.debounce( fetchData, 500 );

  const handleChange = ( { target: { value } } ) => {
    console.log( value.trim() );
    if ( value.trim().length >= 3 ) {
      fetchDataDebounced( value.trim() );
    }
  };

  const handleCountrySelect = ( country ) => {
    setSelectedCountry( country );
    setTimeout( () => onActiveModal(), 800 );
  };
  // console.log( staticCountries );
  const handleAutocompleteClick = ( autocomplete ) => {
    handleCountrySelect( autocomplete );
    setCountries( ( prevCountries ) => {
      const countryClone = prevCountries.find( ( country ) => {
        return country === autocomplete;
      } );
      if ( !countryClone ) {
        console.log( 'додаємо' );
        // prevCountries.push( autocomplete );
        return [ ...prevCountries, autocomplete ];
      }
      console.log( 'клон => виходимо' );
      return prevCountries;
    } );
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

      <S.InputWrapper>
        <S.Input
          type="search" // 'text' - without reset
          name="filter"
          placeholder='Введіть назву країни'
          // value={ inputValue }
          onChange={ handleChange }
          list="autocomplete-options"
          autoFocus
        />
        {autocomplete
          && <S.Autocomplete onClick={ () => handleAutocompleteClick( autocomplete ) }>
            <p>{autocomplete}</p>
          </S.Autocomplete>
        }
      </S.InputWrapper>

      <S.CountriesList>
        {countries.map( ( country ) => (
          <S.CountryItem key={ country } onClick={ () => handleCountrySelect( country ) }>
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
