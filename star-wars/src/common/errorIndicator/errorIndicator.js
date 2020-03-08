import React from "react";
import './errorIndicator.css';
import deathStar from './death-star.png'

export default () => {
    return (
        <div className="error-wrap">
            <img src={deathStar} alt="death-star error"/>
            <span>Something Gone Terribly Wrong!</span>
            <span>But we already send droids to fix it! Sorry about that</span>
        </div>
    )
}