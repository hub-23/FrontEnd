import React from 'react';
import { MapContainer } from 'react-leaflet';
import L from 'leaflet';
import { MapContent } from './MapContent';
import 'leaflet/dist/leaflet.css';
import './map.css'; // to override leaflet styles


export const MapSmall = ( { markersVisible } ) => {
  const maxBounds = L.latLngBounds( // limiting map move at the max zoom out
      L.latLng( -57, -160 ), // Southwest corner
      L.latLng( 90, 180 ), // Northeast corner
  );
  return (
    <MapContainer
      center={ [ 44.0, 10.09 ] }
      zoom={ 1 }
      minZoom={ 1 }
      maxZoom={ 1 }
      maxBounds={ maxBounds }
      maxBoundsViscosity= { 1.0 }
      scrollWheelZoom={ false }
      style={ { height: '400px', width: '550px' } }
    >
      <MapContent markersVisible={ markersVisible } />
    </MapContainer>
  );
};
