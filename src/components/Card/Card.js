import React from "react";

function Card() {
    return (
        <div data-testid='card'>
            <div data-testid='votes'>
                <p></p>
            </div>
            <div className="title">
                <h1></h1>
            </div>
            <div data-testid='body'>
                <p></p>
            </div>
            <div data-testid='author'>
                <p></p>
            </div>
            <div data-testid='time'>
                <p></p>
            </div>
            <div className="comments">
                <img />
                <a href=""></a>
            </div>
        </div>
    )
}

export default Card