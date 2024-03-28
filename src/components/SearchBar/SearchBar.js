import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch } from "react-redux";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()

    return (
        <div data-testid='searchbar' className="searchbar">
            <input id="search-term" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button><img alt="Search Icon" src="/search.png"/></button>
        </div>
    )
}

export default SearchBar