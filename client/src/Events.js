import React, { Component } from 'react';
import './App.css';
import Search from './Search';

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
        <ul>
          {events.map(event => (
            <li key={event.id}>
            <h1>{event.title}</h1>
            <h1>{event.description}</h1>
            </li>
          ))}
          </ul>
        </div>
    </div>
    );
}
}

export default Events;