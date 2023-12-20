import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { IconMarker } from './IconMarker';
import { fetchCountry } from './api';
import 'leaflet/dist/leaflet.css';
import './map.css'; // to override leaflet styles
import geojsonData from './geojsonData.json';


export const Map = () => {
  const [ countryData, setCountryData ] = useState( [] );
  const [ markersVisible, setMarkersVisible ] = useState( false );
  const maxBounds = L.latLngBounds( // limiting map move at the max zoom out
      L.latLng( -57, -160 ), // Southwest corner
      L.latLng( 90, 180 ), // Northeast corner
  );
  const mapContainerRef = useRef( null );

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
      // console.log( data );
      // {id: '578', countryName: 'Norway', coordinates: Array(2), number: 15}
      const descendingCountryOrder = [ ...data ].sort( ( a, b ) => b.number - a.number );
      // console.log( 'descendingCountryOrder:', descendingCountryOrder );
      setCountryData( descendingCountryOrder );
    } catch ( error ) {
      console.error( error.message );
    }
  };


  useEffect( () => {
    // тут буде запит на бек за масивом всіх зареєстрованих викладачів - teachers:
    // дістаю заг. к-ть викладачів: teachers.length  - хай 10
    const teachersNumber = 14;
    // const teachersCountries = teachers.map( (teacher) => { return teacher.country } )
    const teachersCountries = [ 'Ukraine', 'Poland', 'Ukraine', 'Germany', 'France', 'Slovakia',
      'Poland', 'Ukraine', 'USA', 'Norway', 'Italy', 'Slovakia', 'South Korea', 'Norway', 'Poland',
    ];

    const uniqueTeachersCountries = teachersCountries.filter( ( country, index, array ) =>
      array.indexOf( country ) === index,
    );

    const backendData = uniqueTeachersCountries.map( ( uniqueCountry ) => {
      // отримаємо к-ть вчителів у кожній країні
      const countryClones = teachersCountries.filter( ( country ) => country === uniqueCountry );
      // ['Ukraine', 'Ukraine', 'Ukraine']
      // ['Poland', 'Poland']
      // ['Germany'] ...
      const teachersPercentagePerCountry = Math.round( ( countryClones.length * 100 ) / teachersNumber );
      // console.log( teachersPercentagePerCountry );
      return {
        country: uniqueCountry,
        teachersPercentage: teachersPercentagePerCountry,
      };
    } );
    // [{country: 'Ukraine', teachersNumber: 30}, {country: 'Poland', teachersNumber: 20}, ...]

    fetchData( backendData );
  }, [] );


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

  return (
    <div>
      <div
        ref={ mapContainerRef } style={ { height: '700px', width: '1030px', overflow: 'hidden' } }
      >
        <MapContainer
          center={ [ 44.0, 10.09 ] }
          zoom={ 2 }
          minZoom={ 2 }
          maxZoom={ 2 }
          maxBounds={ maxBounds }
          maxBoundsViscosity= { 1.0 }
          scrollWheelZoom={ false }
          style={ { height: '700px', width: '1030px' } }
        >
          <TileLayer
            attribution='&copy;
            <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
            | Made with <a href="https://www.naturalearthdata.com">Natural Earth</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={ geojsonData.features } />
          { markersVisible && <IconMarker countryData={ countryData } /> }
        </MapContainer>
      </div>
    </div>
  );
};
