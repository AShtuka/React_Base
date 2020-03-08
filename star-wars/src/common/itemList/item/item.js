import React from "react";
import './item.css'

export default ({name, id, onItemSelected}) => {
    return (
        <div className="col item" onClick={onItemSelected}>
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
                     className="card-img-top"
                     alt="NOT FOUND"/>
                <div className="card-footer">
                    {name}
                </div>
            </div>
        </div>
    )
}