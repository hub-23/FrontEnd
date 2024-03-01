import React from 'react';
import { MapContainer } from 'react-leaflet';
import L from 'leaflet';
import { MapContent } from './MapContent';
import 'leaflet/dist/leaflet.css';
import './map.css'; // to override leaflet styles


export const MapBig = ( { markersVisible } ) => {
  const maxBounds = L.latLngBounds( // limiting map move at the max zoom out
      L.latLng( -57, -160 ), // Southwest corner
      L.latLng( 90, 180 ), // Northeast corner
  );
  return (
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
      <MapContent markersVisible={ markersVisible } />
    </MapContainer>
  );
};
