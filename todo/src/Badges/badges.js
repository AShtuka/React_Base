import React from "react";
import './badges.css'

export default ({activeTask, doneTask}) => {
    return (
        <div className='badges'>
            <span className="new badge grey" data-badge-caption="Done">{doneTask}</span>
            <span className="new badge" data-badge-caption="Active">{activeTask}</span>
        </div>
    )
}