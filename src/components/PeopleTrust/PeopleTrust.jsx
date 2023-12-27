import React from 'react';
import { useState } from 'react';
import { Map } from './Map';
import * as S from './PeopleTrust.styled';


export const PeopleTrust = () => {
  // data from backend
  const teachers = 5375; // 5300+
  const countries = 57; // 50+
  const students = 15423; // 15400+
  const ukrCities = 241; // 240+

  const roundDownToNearestBase = ( number ) => {
    let base = null;
    switch ( number.toString().length ) {
      case 1:
        base = 1;
        break;
      case 2: // or
      case 3:
        base = 10;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        base = 100;
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
    <section>
      <S.MapContainer>
        <S.Wrapper>
          <S.Title>Нам довіряють</S.Title>
          <S.Text>
              Наші викладачі знаходяться по всьому
              світу, переважна їх кількість в Україні.
              Вони надають послуги, як на місці, так і
              онлайн. Тому, якщо ви знаходитесь у
              Варшаві чи у Києві, перевірте там може
              бути викладач, який прийме вас офлайн.
              А якщо вам зручніше онлайн, вводьте
              “дистанційно” в пошуковику і ми
              знайдемо його для вас.
          </S.Text>
          <S.MapWrapper>
            <Map />
          </S.MapWrapper>
        </S.Wrapper>
      </S.MapContainer>
      <S.StatisticsWrapper>
        <S.StatisticsList>
          <S.StatUnit>
            <S.StatValue>
              {teachers.toString() === teachersNumber.replace( /\s/g, '' )
                ? teachersNumber
                : `${teachersNumber} +`
              }
            </S.StatValue>
            <S.StatHeader>Викладачів</S.StatHeader>
          </S.StatUnit>
          <S.StatUnit>
            <S.StatValue>
              {countries.toString() === countriesNumber
                ? countriesNumber
                : `${countriesNumber} +`
              }
            </S.StatValue>
            <S.StatHeader>Країн світу</S.StatHeader>
          </S.StatUnit>
          <S.StatUnit>
            <S.StatValue>
              {students.toString() === studentsNumber.replace( /\s/g, '' )
                ? studentsNumber
                : `${studentsNumber} +`
              }
            </S.StatValue>
            <S.StatHeader>Учнів</S.StatHeader>
          </S.StatUnit>
          <S.StatUnit>
            <S.StatValue>
              {ukrCities.toString() === ukrCitiesNumber.replace( /\s/g, '' )
                ? ukrCitiesNumber
                : `${ukrCitiesNumber} +`
              }
            </S.StatValue>
            <S.StatHeader>Міст України</S.StatHeader>
          </S.StatUnit>
        </S.StatisticsList>
      </S.StatisticsWrapper>
    </section>
  );
};
