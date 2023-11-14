import React, { useState } from 'react';
import {
  StyledCheckbox,
  StyledInput,
  StyledInputs,
  StyledLabel,
} from './HeroFilter.styled';

import { StyledHeroButton } from '../HeroButton/HeroButton.styled';

const classes = [ 'piano', 'drums', 'guitar', 'duduk', 'darbuka' ];
const cities = [ 'Kyiv', 'Kharkov', 'Korsun', 'Steblev' ];

export const HeroFilter = () => {
  const [ subjectValue, setSubjectValue ] = useState( '' );
  const [ cityValue, setCityValue ] = useState( '' );
  const [ focusInput, setFocusInput ] = useState( '' );
  const [ filteredSuggestions, setFilteredSuggestions ] = useState( [] );

  const handleInputChange = ( e ) => {
    for ( let i = 0; i < e.target.value.length; i++ ) {
      const letter = e.target.value.charAt( i );
      console.log(
          !( ( letter >= 'a' && letter <= 'z' ) || ( letter >= 'A' && letter <= 'Z' ) ),
      );
      if (
        !( ( letter >= 'a' && letter <= 'z' ) || ( letter >= 'A' && letter <= 'Z' ) )
      ) {
        alert( 'можна тільки букви' );
        return;
      }
    }
    const text = e.target.value;
    let filtered = [];
    switch ( e.target.id ) {
      case 'subject':
        setSubjectValue( text );
        filtered = classes.filter(
            ( item ) => item.toLowerCase().charAt( 0 ) === text.toLowerCase(),
        );

        setFilteredSuggestions( filtered );
        break;
      case 'city':
        setCityValue( text );
        filtered = cities.filter( ( item ) =>
          item.toLowerCase().includes( text.toLowerCase() ),
        );
        setFilteredSuggestions( filtered );
        break;

      default:
        break;
    }

    e.target.value === '' && setFilteredSuggestions( [] );
  };

  const handleSuggestionClick = ( suggestion ) => {
    switch ( focusInput ) {
      case 'subject':
        setSubjectValue( suggestion );
        setFilteredSuggestions( [] );
        break;
      case 'city':
        setCityValue( suggestion );
        setFilteredSuggestions( [] );
        break;

      default:
        break;
    }
  };

  const handleFocus = ( e ) => {
    setFocusInput( e.target.id );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();

    const subject = document.getElementById( 'subject' ).value;
    const city = document.getElementById( 'city' ).value;
    const online = document.getElementById( 'radio' ).checked;
    if ( !subject && !city ) {
      alert( 'оберіть щось' );
      return;
    }
    e.target.reset();
    setCityValue( '' );
    setSubjectValue( '' );

    console.log( 'Предмет або заняття:', subject );
    console.log( 'Місто:', city );
    console.log( 'Онлайн:', online );
  };

  return (
    <form className="filter" onSubmit={ handleSubmit }>
      <StyledInputs>
        <StyledInput
          type="text"
          placeholder="Предмет або заняття"
          onChange={ handleInputChange }
          onFocus={ handleFocus }
          value={ subjectValue }
          id="subject"
          autoComplete="off"
        ></StyledInput>
        {focusInput === 'subject' && filteredSuggestions.length > 0 && (
          <ul>
            {filteredSuggestions.map( ( suggestion, index ) => (
              <li key={ index } onClick={ () => handleSuggestionClick( suggestion ) }>
                {suggestion}
              </li>
            ) )}
          </ul>
        )}
        <StyledInput
          type="text"
          placeholder="Місто"
          onChange={ handleInputChange }
          onFocus={ handleFocus }
          value={ cityValue }
          id="city"
          autoComplete="off"
        ></StyledInput>
        {focusInput === 'city' && filteredSuggestions.length > 0 && (
          <ul>
            {filteredSuggestions.map( ( suggestion, index ) => (
              <li key={ index } onClick={ () => handleSuggestionClick( suggestion ) }>
                {suggestion}
              </li>
            ) )}
          </ul>
        )}

        <StyledLabel htmlFor="radio">
          <StyledCheckbox type="checkbox" id="radio"></StyledCheckbox>
          Онлайн
          {' '}
          <StyledHeroButton
            color="black"
            type="submit"
            className="filter-button"
          >
            Найти
          </StyledHeroButton>
        </StyledLabel>
      </StyledInputs>
    </form>
  );
};
