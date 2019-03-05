import React, { Component } from 'react';
import Events from './Events';


class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: Events.state.events,
            searchField: '',
            timeoutId: null
        }
    }
    render() {
        const events = this.state.events;
        return (
        <div>
            {events.map(event => {
                const map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                    center: {
                        lat: event.location[0],
                        lng: event.location[1]
                    },
                });
                new google.maps.Marker({
                    position: {lat: resp.latitude, lng: resp.longitude},
                    label: resp.brewery,
                    map: map
                });
            })}
        </div>
        )}

}

export default Map;