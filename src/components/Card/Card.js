import React from "react";

function Card({ 
    title,
    votes,
    author,
    time,
    body,
    isVideo,
    media,
    comments,
    thumbnail,
    preview,
    postHint}) {

    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        } else {
            return num;
        }
    }

    function loadVideo(media) {
        let urlToUse;
        if (media && media.reddit_video) {
            urlToUse = media.reddit_video.fallback_url;
            return <video className="post-video" controls src={urlToUse}></video>
        } else {
            return;
        }
    }

    function chooseDisplayMedia() {
        if (isVideo) {
            return loadVideo(media)
        } else if (preview) {
            console.log(`PREVIEW ${author}, ${preview.images[0].source.url}`)
            return <img alt="content" className="thumbnail" src={preview.images[0].source.url} />
        } else {
            return null
        }
    }

    return (
        <div data-testid='card' className="card">
            <div data-testid='votes' className="votes">
                <p><img alt="heart" className="heart" src="/icons8-heart-90.png"/>{formatNumber(votes)}</p>
            </div>
            <div className="body-content">
                <h1 className="title">{title}</h1>
                <div data-testid='content' className="content">
                    {chooseDisplayMedia()}
                    <p className="selftext">{body}</p>
                </div>
                <div data-testid='card-bottom' className="card-bottom">
                    <p>By: {author}</p>
                    <p>{new Date(time * 1000).toLocaleDateString()}</p>
                    <div className="comments">
                        <p>{formatNumber(comments)}</p>
                        <img alt="comment bubble" className="comment-bubble" src="/img.icons8.com.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
// https://preview.redd.it/ey5rbxyav8lb1.png?auto=webp&amp;s=2bc7e6bde62a845daf87af8ea5f588211cf28eaf
// TO-DO: write tests for new functions, add css, implement comment functionality, seperate util functions, clean up files