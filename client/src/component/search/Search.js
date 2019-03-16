import React from 'react';
import "./style.css"

const Search = (props) => {
    return (
        <div>
            <div className="searchWrapper">
                <div className="searchBox">
                    <form className="form" onSubmit={props.handleSearch}>
                        <input  onChange = {props.handleSearchText}type="text"/>
                        <button type="submit">Festival name or genre</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Search;