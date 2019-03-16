import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './App.css';
import Search from '../search/Search';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import "./style.css";

class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            searchField: '',
            timeoutId: null,
            hideInput: true
        }
    }

    handleSearchText = (e) => {
        this.setState({searchField: e.target.value });
    }

    handleSearch = (e) => {
        e.preventDefault()
        //console.log(e.target.value)
        const mySearch = encodeURIComponent(this.state.searchField);
        clearTimeout(this.state.timeoutId);
       
            fetch('https://api.predicthq.com/v1/events/?q=' + mySearch, {
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
                    events: data.results,
                    hideInput: false
                 });
                console.log(this.state.events);
        });
    }


    
render() {
    const events = this.state.events;
    console.log(events)
    return (
        <div>  
           {this.state.hideInput ?
            <div>
                <Search 
                    handleSearchText = {e => this.handleSearchText(e)}
                    handleSearch= {e => this.handleSearch(e)} 
                />
            </div>
            : <div></div>
           }
            <div className="eventWrapper">
                <CardColumns>
                    {events.map(event => (
                        <Card className="p-3" key={event.id} style={{ rgba: '0, 0, 0, 0.5' , width: '18rem'}} text="white" >
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Subtitle className="mb-2 subtitle">{event.country}</Card.Subtitle>
                                <Card.Text>
                                
                                </Card.Text>
                                <div className="details" style={{color: 'white'}}>
                                <Link to={`/eventdetail/${event.id}`}>More Details</Link>
                                </div>
                                {/* <Card.Link className="details" style={{color: 'white'}} href="#">More Details</Card.Link> */}
                            </Card.Body>
                        </Card>
                    ))}
                </CardColumns>
            </div>
        </div>
    );
}
};

export default Events;