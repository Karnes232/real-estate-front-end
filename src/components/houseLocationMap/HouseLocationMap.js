import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const HouseLocationMap = ({ lat, lng }) => {
    
    const containerStyle = {
        width: '100%',
        height: '200px',
      };
      
    const center = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      }    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyATyzDwEKWLDx_bJ3M-ahptAfrUpTqApWs"
      })
    
    const [map, setMap] = useState(null)
    console.log(map)
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker position={{ lat: parseFloat(lat), lng: parseFloat(lng) }} />
          <></>
        </GoogleMap>
    ) : <></>
}

export default HouseLocationMap
