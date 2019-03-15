import React, { Component } from 'react';
import {   
    GoogleMap,
    Marker, 
    withGoogleMap
} from "react-google-maps";


class EventDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventDetail: []
        }
    }


    componentDidMount(){
                const id = this.props.match.params.id
                console.log(id)
                    fetch(`https://api.predicthq.com/v1/events/?id=${id}` , {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Bearer PHWEekXXhb9dRMk9TeVABeVHYZ9N7b",
                    }
                })
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    console.log(data)
                    this.setState({
                        eventDetail: data.results,
                });
                    console.log(this.state.eventDetail);
            });
        }
    
    render() {
        const { eventDetail } = this.state
        const theEvent = eventDetail[0];
        const gMap = withGoogleMap(props => {
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: theEvent.location[0], lng: theEvent.location[1] }}>
                <Marker position= {{ lat: theEvent.location[0], lng: theEvent.location[1] }}/>
            </GoogleMap>
        });
        
        return (
        
            <div>
                <div>
                    <div key={theEvent.id}>
                        <h1>{theEvent.title}</h1>
                        <h2>{theEvent.description}</h2>
                        <gMap
                            containerElement={<div style={{ height: '400px' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />
                    </div>
                </div>
            </div>             
    
        )
    }
}

export default EventDetail;