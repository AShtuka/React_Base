import React from "react";
import './card-item.css'

export default ({title, id, onItemSelected}) => {
    return (
            <div className='col-md-3 col-sm-3 col-3 card-padding'>
                <div className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} className="card-img-top" alt="NOT FOUND" />
                    <div className="card-body card-item">
                        <a href="#!" onClick={onItemSelected}>{title}</a>
                    </div>
                </div>
            </div>
            )
};