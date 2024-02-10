import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import _ from 'lodash';
import { MapSmall } from './Map/MapSmall';
import { MapBig } from './Map/MapBig';
import * as S from './PeopleTrust.styled';


export const PeopleTrust = () => {
  const [ markersVisible, setMarkersVisible ] = useState( false );
  const [ mapWidth, setMapWidth ] = useState( null );
  const mapContainerRef = useRef( null );

  useEffect( () => {
    const mapContainer = mapContainerRef.current;

    const handleIntersection = ( entries ) => {
      const [ entry ] = entries;
      setMarkersVisible( entry.isIntersecting );
    };

    const observer = new IntersectionObserver( handleIntersection, {
      root: null,
      threshold: 0.5,
    } );

    if ( mapContainer ) {
      observer.observe( mapContainer );
    }

    return () => {
      if ( mapContainer ) {
        observer.unobserve( mapContainer );
      }
    };
  }, [] );

  useEffect( () => {
    console.log( 'dd' );
    const checkMapWidth = () => {
      const mapContainer = mapContainerRef.current;

      if ( mapContainer ) {
        const mapWidth = mapContainer.clientWidth;
        console.log( mapWidth );
        setMapWidth( mapWidth );
      }
    };

    setTimeout( checkMapWidth, 0 );

    const handleResize = () => checkMapWidth();
    window.addEventListener( 'resize', _.debounce( handleResize, 800 ) );

    return () => {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );

  return (
    <S.MapSection>
      <S.MapContainerr>
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
          <S.MapWrapper ref={ mapContainerRef }>
            { ( mapWidth >= 550 && mapWidth < 1030 ) && <MapSmall markersVisible={ markersVisible } /> }
            { ( mapWidth >= 1030 ) && <MapBig markersVisible={ markersVisible } /> }
          </S.MapWrapper>
        </S.Wrapper>
      </S.MapContainerr>
    </S.MapSection>
  );
};
