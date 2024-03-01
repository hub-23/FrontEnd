import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import pinIcon from '../../../../assets/home/map/pinIcon.svg';
import circleIcon from '../../../../assets/home/map/circleIcon.svg';
import { transition } from '../../../../utils/variables.styled';

const placeMarkers = (
  dotContainerClass,
  pinContainerClass,
  circleContainerClass,
  number,
  order
) => {
  const cumulativeDelay = 300 * order;

  setTimeout( () => {
    const dotContainer = document.querySelector( `.${dotContainerClass}` );
    if ( dotContainer ) dotContainer.style.opacity = '1';

    setTimeout( () => {
      const pinContainer = document.querySelector( `.${pinContainerClass}` );
      if ( pinContainer ) pinContainer.style.opacity = '1';

      setTimeout( () => {
        const circleContainer = document.querySelector(
          `.${circleContainerClass}`
        );
        if ( circleContainer ) circleContainer.style.opacity = '1';
      }, 500 );
    }, 500 );
  }, cumulativeDelay );
};

export const IconMarker = ( { countryData } ) => {
  return countryData.map( ( { id, countryName, coordinates, number }, index ) => {
    const dotContainerClass = `dot-container-${id}`;
    const pinContainerClass = `pin-container-${id}`;
    const circleContainerClass = `circle-container-${id}`;

    const combinedIcon = new L.DivIcon( {
      className: 'combined-marker', // без цього на карті з'являються квадрати
      html: `
                <div style="position: relative">
                <div 
                  class="${dotContainerClass}"
                  style="position: absolute; 
                         width: 5px; 
                         height: 5px; 
                         opacity: 0; 
                         transition: opacity ${transition};
                         background-image: url(${circleIcon});
                         background-repeat: no-repeat";
                >
                </div>
                <div 
                    class="${pinContainerClass}" 
                    style="position: absolute; 
                           width: 20px; 
                           height: 20px; 
                           top: -15px;
                           opacity: 0; 
                           transition: opacity ${transition};
                           background-image: url(${pinIcon});
                           background-repeat: no-repeat";
                >
                </div>
                <div
                    class="${circleContainerClass}"
                    style="position: absolute; 
                           width: 30px; 
                           height: 30px; 
                           top: -42px; 
                           left: -12px; 
                           opacity: 0; 
                           transition: opacity ${transition};
                           background-image: url(${circleIcon});
                           background-repeat: no-repeat"
                >
                    <span 
                        style="position: absolute; 
                               top: 50%; 
                               left: 50%; 
                               transform: translate(-50%, -50%); 
                               color: white; 
                               font-size: 11px"
                    >
                    ${number}%
                    </span>
                </div>
                </div>
          `,
    } );

    placeMarkers(
      dotContainerClass,
      pinContainerClass,
      circleContainerClass,
      number,
      index
    );

    return (
      <Marker key={ countryName } position={ coordinates } icon={ combinedIcon }>
        <Tooltip>{countryName}</Tooltip>
      </Marker>
    );
  } );
};
