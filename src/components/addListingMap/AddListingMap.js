import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


function AddListingMap({handleLatLngChange}) {
  const [lat, setLat] = useState(18.958246)
  const [long, setLong] = useState(-70.209769)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyATyzDwEKWLDx_bJ3M-ahptAfrUpTqApWs"
  })
  const [map, setMap] = React.useState(null)
  console.log(map)
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  let center = {
    lat: lat,
    lng: long
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const handleClick = (e) => {
      handleLatLngChange(e.latLng.lat(), e.latLng.lng())
      setLat(e.latLng.lat)
      setLong(e.latLng.lng)
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleClick}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{ lat: lat, lng: long }} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(AddListingMap)