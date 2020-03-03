import React from "react";
import './badges.css'

export default () => {
    return (
        <div className='badges'>
            <span className="new badge grey" data-badge-caption="Done">4</span>
            <span className="new badge" data-badge-caption="Active">4</span>
        </div>
    )
}