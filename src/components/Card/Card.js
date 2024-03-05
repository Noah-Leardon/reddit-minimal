import React from "react";

function Card() {
    return (
        <div data-testid='card'>
            <div data-testid='votes'>
                <p></p>
            </div>
            <div data-testid='content' className="content">
                <h1></h1>
                <p></p>
            </div>
            <div data-testid='card-bottom' className="card-bottom">
                <p></p>
                <p></p>
                <div>
                    <img />
                    <a href=""></a>
                </div>
            </div>
        </div>
    )
}

export default Card