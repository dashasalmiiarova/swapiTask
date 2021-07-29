import React from 'react';

const Search = ({ placeholder, handleChange }) => (
    <div className="search-div">
        <input className="search" type='search' placeholder={placeholder} onChange={ handleChange } />
    </div>
)

export default Search;