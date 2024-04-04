import React from "react";
import { chooseDisplayMedia, formatNumber } from '../../helperfunctions/helperfunctions'
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../Slices/CommentsSlice/commentsSlice";
import Comment from "../Comment/Comment";

function Card({ 
    title,
    votes,
    author,
    time,
    body,
    isVideo,
    media,
    numOfComments,
    preview,
    subreddit,
    postId}) {

    const dispatch = useDispatch()
    const commentPostId = useSelector((state) => state.comments.postId)
    const comments = useSelector((state) => state.comments.comments)
    
    function handleClick() {
        dispatch(fetchComments({ searchTerm: undefined, type: 'comment', postId: postId}))
    }

    return (
        <div data-testid='card' className="card">
            <div data-testid='votes' className="votes">
                <p className="number-votes"><img alt="heart" className="heart" src="/icons8-heart-90.png"/>{formatNumber(votes)}</p>
                <p className="subreddit">r/{subreddit}</p>
            </div>
            <h1 className="title">{title}</h1>
            <div className="body-content">
                <div data-testid='content' className="content">
                    {chooseDisplayMedia(isVideo, media, preview)}
                    <p className="selftext">{body}</p>
                </div>
                <div data-testid='card-bottom' className="card-bottom">
                    <p>By: {author}</p>
                    <p>{new Date(time * 1000).toLocaleDateString()}</p>
                    <div className="comments-link">
                        <p data-testid="comments-link" onClick={handleClick}>{formatNumber(numOfComments)}</p>
                        <img alt="comment bubble" className="comment-bubble" src="/img.icons8.com.png"/>
                    </div>
                </div>
                <div data-testid="comment-section" className="comment-section">
                {postId === commentPostId ? <ul data-testid="comments" className="comments">
                    {comments.map((comment) => {
                        return <li key={comment.data.id}>
                        <Comment 
                        author={comment.data.author}
                        body={comment.data.body}
                        commentVotes={comment.data.score}
                        /></li>
                    })}
                </ul> : null}
            </div>
            </div>
        </div>
    )
}

export default Card