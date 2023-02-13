import React from "react";



export default function Card({ image }) {
    return (
        <div className="imgDiv">
            <img src={image.webformatURL} alt="" />
            <div className="userDiv">
                Photo by {image.user}
            </div>
        </div>
    )
}