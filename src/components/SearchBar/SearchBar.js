import React, { useState } from "react";
import { UseSelector, useDispatch } from "react-redux";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()

    return (
        <div data-testid='searchbar'>
            <input placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button><img alt=""></img></button>
        </div>
    )
}

export default SearchBar