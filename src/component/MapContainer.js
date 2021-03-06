import React from 'react';
import {ApiKey} from '../dummyData';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '500px',
  };

class MapContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

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
    apiKey: ApiKey.api
  })(MapContainer);


//   const triangleCoords = [
//     {lat: 25.774, lng: -80.190},
//     {lat: 18.466, lng: -66.118},
//     {lat: 32.321, lng: -64.757},
//     {lat: 25.774, lng: -80.190}
//   ];
// <Map google={this.props.google}
//         style={{width: '100%', height: '100%', position: 'relative'}}
//         className={'map'}
//         zoom={14}>
//         <Polygon
//           paths={triangleCoords}
//           strokeColor="#0000FF"
//           strokeOpacity={0.8}
//           strokeWeight={2}
//           fillColor="#0000FF"
//           fillOpacity={0.35} />
//     </Map>