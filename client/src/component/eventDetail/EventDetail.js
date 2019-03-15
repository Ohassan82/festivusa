import React, { Component } from 'react';
//import './App.css';
import Search from '../search/Search';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

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
    console.log(this.state)
    return (
     
        <div>
        <div>
            {eventDetail.map((detail, index) => (
                <div key={detail.id}>
                    <h1>{detail.title}</h1>
                    <h2>{detail.description}</h2>
                </div>
            ))}
            </div>
         
        </div>             
   
    )
}
}

export default EventDetail;