import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MapContainer() {
    return (
        <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCdhVed05d2fUdlbTjjicg2GL8Y7FMm6V0"}}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={10}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

export default MapContainer
