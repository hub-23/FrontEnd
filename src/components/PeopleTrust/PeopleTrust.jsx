import React from 'react';
import { useState } from 'react';
import { Map } from './Map';
import {
  StyledContainer,
  StyledTextWrapper,
  StyledTitle,
  StyledText,
  StyledStatisticsWrapper,
  StyledStatisticsList,
  StyledStatUnit,
  StyledStatValue,
  StyledStatHeader,
} from './PeopleTrust.styled';


export const PeopleTrust = () => {
  // data from backend
  const teachers = 5375; // 5000
  const countries = 57; // 50
  const students = 15423; // 15000
  const ukrCities = 241; // 200

  const roundDownToNearestBase = ( number ) => {
    let base = null;
    switch ( number.toString().length ) {
      case 1:
        base = 1;
        break;
      case 2:
        base = 10;
        break;
      case 3:
        base = 100;
        break;
      case 4: // or
      case 5:
        base = 1000;
        break;
      case 6:
        base = 10000;
        break;
      case 7:
        base = 100000;
        break;
      default:
        console.log( 'Invalid number' );
    }

    if ( base === 1 ) { // under 10
      return number;
    } else {
      return Math.floor( number / base ) * base;
    }
  };

  const [ teachersNumber /* , setTeachersNumber */ ] = useState(
      roundDownToNearestBase( teachers ).toLocaleString( 'en-US' ).replace( ',', ' ' ).replace( ',', ' ' ),
  );
  const [ countriesNumber /* , setCountriesNumber */ ] = useState(
      roundDownToNearestBase( countries ).toLocaleString( 'en-US' ),
  );
  const [ studentsNumber /* , setStudentsNumber */ ] = useState(
      roundDownToNearestBase( students ).toLocaleString( 'en-US' ).replace( ',', ' ' ).replace( ',', ' ' ),
  );
  const [ ukrCitiesNumber /* , setUkrCitiesNumber */ ] = useState(
      roundDownToNearestBase( ukrCities ).toLocaleString( 'en-US' ).replace( ',', ' ' ),
  );

  return (
    <section style={ { border: '3px solid red' } }>
      <StyledContainer>
        <StyledTextWrapper>
          <StyledTitle>Нам довіряють</StyledTitle>
          <StyledText>
            Наші викладачі знаходяться по всьому
            світу, переважна їх кількість в Україні.
            Вони надають послуги, як на місці, так і
            онлайн. Тому, якщо ви знаходитесь у
            Варшаві чи у Києві, перевірте там може
            бути викладач, який прийме вас офлайн.
            А якщо вам зручніше онлайн, вводьте
            “дистанційно” в пошуковику і ми
            знайдемо його для вас.
          </StyledText>
        </StyledTextWrapper>
        <Map />
        <StyledStatisticsWrapper>
          <StyledStatisticsList>
            <StyledStatUnit>
              <StyledStatValue>
                {teachers.toString() === teachersNumber.replace( /\s/g, '' )
                  ? teachersNumber
                  : `${teachersNumber} +`
                }
              </StyledStatValue>
              <StyledStatHeader>Викладачів</StyledStatHeader>
            </StyledStatUnit>
            <StyledStatUnit>
              <StyledStatValue>
                {countries.toString() === countriesNumber
                  ? countriesNumber
                  : `${countriesNumber} +`
                }
              </StyledStatValue>
              <StyledStatHeader>Країн світу</StyledStatHeader>
            </StyledStatUnit>
            <StyledStatUnit>
              <StyledStatValue>
                {students.toString() === studentsNumber.replace( /\s/g, '' )
                  ? studentsNumber
                  : `${studentsNumber} +`
                }
              </StyledStatValue>
              <StyledStatHeader>Учнів</StyledStatHeader>
            </StyledStatUnit>
            <StyledStatUnit>
              <StyledStatValue>
                {ukrCities.toString() === ukrCitiesNumber.replace( /\s/g, '' )
                  ? ukrCitiesNumber
                  : `${ukrCitiesNumber} +`
                }
              </StyledStatValue>
              <StyledStatHeader>Міст України</StyledStatHeader>
            </StyledStatUnit>
          </StyledStatisticsList>
        </StyledStatisticsWrapper>
      </StyledContainer>
    </section>
  );
};
