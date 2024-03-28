import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Slices/PostSlice/postSlice";
import Card from "../Card/Card";


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const callCount = useSelector((state) => state.callCount)

    function handleClick() {
        dispatch(fetchPosts(searchTerm))
        setSearchTerm("")
    }

    return (
        <div data-testid='searchbar' className="searchbar">
            <input id="search-term" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={() => handleClick()}><img alt="Search Icon" className="search-icon" src="/search.png"/></button>
            <ul className="posts">
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
            </ul>
        </div>
    )
}

export default SearchBar