import React from "react";
import './filter.css'

export default () => {
    return (
                <div className='filter'>
                    <span className="btn">All</span>
                    <span className="btn grey">Active</span>
                    <span className="btn grey">Done</span>
                </div>
            )
}