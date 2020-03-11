import React from "react";
import './homePageItem.css'

export default ({label, onClick}) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 home-page-item" data-name={label} onClick={onClick}>
            <img className='home-page-img'
                 src={`https://starwars-visualguide.com/assets/img/categories/${label}.jpg`}
                 alt="NOT FOUND"/>
            <p className='home-page-item-label'>{label.toUpperCase()}</p>
        </div>
    )
}