import React, { Component } from 'react';



import { 
    GoogleMap,
    Marker, 
    withGoogleMap,
    withScriptjs
} from "react-google-maps";

const EventGMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{lat: props.latitude, lng: props.longitude}}>
        <Marker position={{lat: props.latitude, lng: props.longitude}}/>
    </GoogleMap>
))

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
    console.log(eventDetail)
    return (
     
        <div>
        <div>
            {eventDetail.map((detail, index) => (
                <div key={detail.id}>
                    <h1>{detail.title}</h1>
                    <h2>{detail.description}</h2>
                    <EventGMap
                        latitude={detail.location[1]}
                        longitude={detail.location[0]}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBtJlR-CAXL8f_w-pbnWf9DGJDWfQ2eGpI&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: `100%`}} />}
                        containerElement={<div style={{height: `400px`}} />}
                        mapElement={<div style={{height: `100%`}} />}></EventGMap>
                </div>
            ))}
            </div>
         
        </div>             
   
    )
}
}

export default EventDetail;