import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import pinIcon from '../../images/pinIcon.svg';
import circleIcon from '../../images/circleIcon.svg';
import { fetchCountry } from './api';


export const Map = () => {
  const [ countryData, setCountryData ] = useState( [] );

  const maxBounds = L.latLngBounds( // limiting map move at the max zoom out
      L.latLng( -57, -160 ), // Southwest corner
      L.latLng( 90, 180 ), // Northeast corner
  );

  const fetchData = async ( backendData ) => {
    try {
      const data = await Promise.all( backendData.map( async ( { country, teachersPercentage } ) => {
        const countryDetails = await fetchCountry( country );
        const { name, latlng, ccn3 } = countryDetails[ 0 ];
        return {
          id: ccn3,
          countryName: name.common,
          coordinates: latlng,
          number: teachersPercentage,
        };
      } ) );
      setCountryData( data );
    } catch ( error ) {
      console.error( error.message );
    }
  };

  useEffect( () => {
    // тут буде запит на бек за масивом всіх зареєстрованих викладачів - teachers:
    // дістаю заг. к-ть викладачів: teachers.length  - хай 10
    const teachersNumber = 12;
    // const teachersCountries = teachers.map( (teacher) => { return teacher.country } )
    const teachersCountries = [ 'Ukraine', 'Poland', 'Ukraine', 'Germany', 'France',
      'Poland', 'Ukraine', 'USA', 'Norway', 'Italy', 'Slovakia', 'South Korea',
    ];
    const uniqueTeachersCountries = teachersCountries.filter( ( country, index, array ) =>
      array.indexOf( country ) === index,
    );
    const backendData = uniqueTeachersCountries.map( ( uniqueCountry ) => {
      // отримаємо к-ть вчителів у кожній країні
      const countryClones = teachersCountries.filter( ( country ) => country === uniqueCountry );
      const teachersPercentagePerCountry = Math.round( ( countryClones.length * 100 ) / teachersNumber );
      console.log( teachersPercentagePerCountry );
      return {
        country: uniqueCountry,
        teachersPercentage: teachersPercentagePerCountry,
      };
    } );
    // [{country: 'Ukraine', teachersNumber: 30}, {country: 'Poland', teachersNumber: 20}, ...]
    fetchData( backendData );
  }, [] );

  return (
    <MapContainer
      center={ [ 44.0, 10.09 ] }
      zoom={ 2 }
      minZoom={ 2 }
      maxBounds={ maxBounds }
      maxBoundsViscosity= { 1.0 }
      scrollWheelZoom={ false }
      style={ { height: '670px', width: '1030px' } }
      // по макету: height: '540px', width: '1120px'
    >
      <TileLayer
        attribution='&copy;
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={ [ 0, 0 ] }
        icon={ new L.DivIcon( { className: 'shadow-marker' } ) }
        pane="shadowPane"
        opacity={ 0 } // Hide the shadow marker
      />
      {countryData.map( ( { id, countryName, coordinates, number } ) => {
        const pinContainerId = `pin-container-${id}`;
        const circleContainerId = `circle-container-${id}`;

        const combinedIcon = new L.DivIcon( {
          className: 'combined-marker', // без цього на карті з'являються квадрати
          html: `
            <div style="position: relative">
              <div 
                id="${pinContainerId}" 
                style="position: absolute; 
                       width: 20px; 
                       height: 20px; 
                       top: -10px;
                       opacity: 0; 
                       transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                       background-image: url(${pinIcon});
                       background-repeat: no-repeat";
              >
              </div>
              <div
                id="${circleContainerId}"
                style="position: absolute; 
                       width: 30px; 
                       height: 30px; 
                       top: -40px; 
                       left: -11px; 
                       opacity: 0; 
                       transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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

        setTimeout( () => {
          const pinContainer = document.getElementById( pinContainerId );
          if ( pinContainer ) {
            pinContainer.style.opacity = '1';
          }
        }, 1000 );

        setTimeout( () => {
          const circleContainer = document.getElementById( circleContainerId );
          if ( circleContainer ) {
            circleContainer.style.opacity = '1';
          }
        }, 2000 );

        return (
          <Marker key={ countryName } position={ coordinates } icon={ combinedIcon }>
            <Tooltip>{ countryName }</Tooltip>
          </Marker>
        );
      } )}
    </MapContainer>
  );
};
