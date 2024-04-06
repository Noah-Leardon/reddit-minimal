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
    const hasError = useSelector((state) => state.post.hasError)
    

    useEffect(() => {
        //{ type: 'post', sort: 'hot', searchTerm: searchTerm, postId: null}
        dispatch(fetchPosts({ type: 'post', sort: sort, searchTerm: searchTerm, postId: null, subreddit: null }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchPosts({ type: 'post', sort: sort, searchTerm: searchTerm, postId: null, subreddit: null }))
        setSearchTerm('')
    }

    function handleClick(subreddit) {
        dispatch(fetchPosts({ type: 'subreddit', sort: null, searchTerm: null, postId: null, subreddit: subreddit}))
    }

    return (
        <div data-testid='searchbar' className="body">
            <ol className="subreddits">
                    <li onClick={() => handleClick('funny')} value="funny">r/funny</li>
                    <li onClick={() => handleClick('AskReddit')} value="AskReddit">r/AskReddit</li>
                    <li onClick={() => handleClick('gaming')} value="gaming">r/gaming</li>
                    <li onClick={() => handleClick('worldnews')} value="worldnews">r/worldnews</li>
                    <li onClick={() => handleClick('todayilearned')} value="todayilearned">r/todayilearned</li>
                </ol>
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
            {hasError ? <h1>Error! Reload</h1> : !isLoading ? <ul className="posts">
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