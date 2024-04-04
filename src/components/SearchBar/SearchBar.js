import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Slices/PostSlice/postSlice";
import Card from "../Card/Card";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('Popular')
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const isLoading = useSelector((state) => state.post.isLoading)
    const [sort, setSort] = useState('hot')

    useEffect(() => {
        //{ type: 'post', sort: 'hot', searchTerm: searchTerm, postId: null}
        dispatch(fetchPosts({ type: 'post', sort: sort, searchTerm: searchTerm, postId: null, subreddit: null }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchPosts({ type: 'post', sort: sort, searchTerm: searchTerm, postId: null}))
        setSearchTerm('')
    }

    return (
        <div data-testid='searchbar' className="body">
            <form data-testid="form" onSubmit={(e) => handleSubmit(e)} className="searchbar">
                <div className="search">
                    <input id="search-term" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                    <button type="submit" id="search-button"><img alt="Search Icon" className="search-icon" src="/search.png"/></button>
                </div>
                <div className="selectors">
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value='hot'>Hot</option>
                        <option value='new'>New</option>
                        <option value='top'>Top</option>
                    </select>
                </div>
            </form>
            {!isLoading ? <ul className="posts">
                {posts.map((post) => {
                    return <li className="post" key={post.data.id}><Card 
                        title={post.data.title} 
                        votes={post.data.score} 
                        author={post.data.author} 
                        time={post.data.created_utc} 
                        body={post.data.selftext} 
                        isVideo={post.data.is_video} 
                        media={post.data.media} 
                        numOfComments={post.data.num_comments} 
                        preview={post.data.preview}
                        subreddit={post.data.subreddit}
                        postId={post.data.id}
                        /></li>
                })}
            </ul> : <img data-testid="loading-img" className="loading" alt="loading" src="/ZKZg.gif" />}
        </div>
    )
}

export default SearchBar