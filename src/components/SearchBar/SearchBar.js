import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Slices/PostSlice/postSlice";
import Card from "../Card/Card";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('Popular')
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const isLoading = useSelector((state) => state.post.isLoading)
    //const callCount = useSelector((state) => state.callCount)

    useEffect(() => {
        dispatch(fetchPosts(searchTerm))
    })

    function handleClick(e) {
        e.preventDefault()
        dispatch(fetchPosts(searchTerm))
        setSearchTerm('')
    }

    return (
        <div data-testid='searchbar' className="body">
            <form onSubmit={(e) => handleClick(e)} className="searchbar">
                <input id="search-term" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button type="submit" id="search-button"><img alt="Search Icon" className="search-icon" src="/search.png"/></button>
            </form>
            {!isLoading ? <ul className="posts">
                {posts.map((post) => {
                    return <li key={post.data.id}><Card 
                        title={post.data.title} 
                        votes={post.data.score} 
                        author={post.data.author} 
                        time={post.data.created_utc} 
                        body={post.data.selftext} 
                        isVideo={post.data.is_video} 
                        media={post.data.media} 
                        comments={post.data.num_comments} 
                        thumbnail={post.data.thumbnail}
                        preview={post.data.preview}
                        postHint={post.data.post_hint}
                        /></li>
                })}
            </ul> : <h1 className="loading">Loading...</h1>}
        </div>
    )
}

export default SearchBar