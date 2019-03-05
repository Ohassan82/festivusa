import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            searchField: '',
            timeoutId: null
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
                this.setState({ events: data.results });
                console.log(this.state.events);
        });
    }

render() {
    const events = this.state.events;
    return (
    <div>
        <Search 
        handleSearchText = {e => this.handleSearchText(e)}
        handleSearch= {e => this.handleSearch(e)} 
        />
        <div>
        <CardColumns>
          {events.map(event => (
            <Card className="p-3" key={event.id} bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{event.country}</Card.Subtitle>
                    <Card.Text>
                    
                    </Card.Text>
                    <Card.Link href="#">More Details</Card.Link>
                    <Card.Link href="#"> Map</Card.Link>
                </Card.Body>
            </Card>
          ))}
          </CardColumns>
        </div>
    </div>
    );
}
}

export default Events;