import React, { useState } from 'react';
import _ from 'lodash';
import { IconSvg } from '../../common/IconSvg';
import * as S from './CountryFilter.styled';
import { CrossBtn } from '../MobileMenu/MobileMenu.styled';
import { useHubContext } from '../../../redux/Context';
import { fetchCountry } from '../../PeopleTrust/Map/api';


export const CountrySelect = ( { onActiveModal } ) => {
  const { selectedCountry, setSelectedCountry } = useHubContext();
  const defaultCountries = [
    'Україна', 'Польща', 'Чехія', 'Франція', 'Швейцарія',
    'Німеччина', 'Велика Британія', 'Латвія', 'Литва', 'Швеція',
    'Канада', 'США', 'Словаччина', 'Австрія', 'Угорщина',
  ];
  // let storedCountries = defaultCountries;
  // try {
  //   storedCountries = JSON.parse( localStorage.getItem( 'countries' ) ) || defaultCountries;
  // } catch ( error ) {
  //   error.message;
  // }

  // const [ countries, setCountries ] = useState( storedCountries );
  const [ autocomplete, setAutocomplete ] = useState( '' );
  const [ warning, setWarning ] = useState( '' );

  // useEffect( () => {
  //   localStorage.setItem( 'countries', JSON.stringify( countries ) );
  // }, [ countries ] );

  const fetchData = async ( inputData ) => {
    try {
      const countryDetails = await fetchCountry( inputData );
      const { name } = countryDetails[ 0 ];
      console.log( name.common );
      const receivedData = name.common;
      const startsWithInputData = receivedData.startsWith( inputData );

      if ( startsWithInputData ) {
        setAutocomplete( receivedData );
      }
    } catch ( error ) {
      console.error( error.message );
      setAutocomplete( '' );
      setWarning( `Країну ${inputData} не знайдено` );
    }
  };
  const fetchDataDebounced = _.debounce( fetchData, 500 );

  const handleChange = ( { target: { value } } ) => {
    if ( value.trim().length >= 3 ) {
      fetchDataDebounced( value.trim() );
      setWarning( '' );
    } else if ( value.trim().length >= 1 ) {
      setWarning( 'Введіть щонайменше перші три літери A-Z/a-z' );
      setAutocomplete( '' );
    } else {
      setWarning( '' );
    }
  };

  const handleCountrySelect = ( country ) => {
    setSelectedCountry( country );
    setTimeout( () => onActiveModal(), 800 );
  };

  const handleAutocompleteClick = ( autocomplete ) => {
    handleCountrySelect( autocomplete );
    // setCountries( ( prevCountries ) => {
    //   const countryClone = prevCountries.find( ( country ) => {
    //     return country === autocomplete;
    //   } );
    //   if ( !countryClone ) {
    //     return [ ...prevCountries, autocomplete ];
    //   }
    //   return prevCountries;
    // } );
  };

  const handleKeyPress = ( e ) => {
    if ( /[0-9$%^&*()_+={}[\]:;<>,.?~\\/"`|!@#]/.test( e.key ) ) {
      e.preventDefault();
      setWarning( 'Цифри та символи не допустимі' );
    }
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
          onChange={ handleChange }
          onKeyDown={ handleKeyPress }
          pattern="[A-Za-z]{3,}"
          title="Введіть щонайменше перші три літери A-Z/a-z"
          autoComplete='off'
          autoFocus
        />
        {autocomplete
          && <S.Autocomplete onClick={ () => handleAutocompleteClick( autocomplete ) }>
            <p>{autocomplete}</p>
          </S.Autocomplete>
        }
        {warning && <S.WarningText><p>{warning}</p></S.WarningText>}
      </S.InputWrapper>
      <S.CountriesListWrapper>
        <S.CountriesList>
          {defaultCountries.map( ( country ) => (
            <S.CountryItem key={ country } onClick={ () => handleCountrySelect( country ) }>
              <S.MarkerPlace>
                {selectedCountry === country && <S.Mark></S.Mark>}
              </S.MarkerPlace>
              <S.CountryName>{country}</S.CountryName>
            </S.CountryItem>
          ) )}
        </S.CountriesList>
      </S.CountriesListWrapper>

      <S.NoteWrapper>
        <S.Divider></S.Divider>
        <S.Note>
          Вибір країни допоможе відображати актуальну інформацію про викладачів або учнів поблизу
        </S.Note>
      </S.NoteWrapper>
    </S.CountrySelectContainer>
  );
};
