import React from "react";
import './todoListItem.css'

export default () => {
    return (
                <div>Item
                    <a href="#!" className="secondary-content">
                        <i className="material-icons del">delete_forever</i>
                        <i className="material-icons">priority_high</i>
                    </a>
                </div>
            )
}