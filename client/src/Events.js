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
       
            fetch('https://api.predicthq.com/v1/events/?q=' + mySearch)
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({ events: data.items });
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
            <h1>{event.volumeInfo.title}</h1>
            <h1>{event.volumeInfo.authors}</h1>
            <img src={event.volumeInfo.imageLinks.smallThumbnail} alt="book thumbnail"/>
            </li>
          ))}
          </ul>
        </div>
    </div>
    );
}
}

export default Events;