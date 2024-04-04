import React from "react";
import { formatNumber } from "../../helperfunctions/helperfunctions";

function Comment({ author, body, commentVotes }) {
    return (
        <div data-testid='comment'>
            <h3 className="comment-author">{author}</h3>
            <p className="comment-body">{body}</p>
            <p className="comment-votes"><img alt="heart" className="heart" src="/icons8-heart-90.png"/> {formatNumber(commentVotes)}</p>
        </div>
    )
}

export default Comment