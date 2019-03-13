import React, { Component } from 'react';
import Events from '../events/Events';

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: Events.state.events,
            searchField: '',
            timeoutId: null
        }
    }

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });

    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}

        renderMarkers(map, maps) {
            let marker = new maps.Marker({
              position: myLatLng,
              map,
              title: 'Hello World!'
            });
          }
    
    render() {
        return (
            <div style={{'width':800,'height':800}}>
                <GoogleMap
                    bootstrapURLKeys={{key: settings.googleMapApiKey}}
                    defaultZoom={11}
                    defaultCenter={{ 
                        lat: this.props.Events.data.event.location[0], 
                        lng: this.props.Events.data.event.location[1]
                    }}
                    onGoogleApiLoaded={({map, maps}) => this.renderMarkers()}
                >
                </GoogleMap>
            </div>
        );
    }


export default Map;