import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class MapContainer extends React.Component{
    render(){
        return(
        <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8awoXAVmlUKOO4J5i6XbB62JRqr0CwPQ'
  })(MapContainer);