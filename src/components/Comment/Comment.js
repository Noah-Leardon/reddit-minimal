import React from "react";

function Comment({ author, body, commentVotes }) {
    return (
        <div data-testid='comment'>
            <h3 className="comment-author">{author}</h3>
            <p className="comment-body">{body}</p>
            <p className="comment-votes"><img alt="heart" className="heart" src="/icons8-heart-90.png"/> {commentVotes}</p>
        </div>
    )
}

export default Comment