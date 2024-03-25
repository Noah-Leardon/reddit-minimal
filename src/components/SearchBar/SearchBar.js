import React, { useState } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div data-testid='searchbar'>
            <input placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button><img alt=""></img></button>
        </div>
    )
}

export default SearchBar