import React from "react";
import './homePageItem.css';
import ErrorBoundary from "../../common/errorBoundary";

export default ({label, onClick, getImage}) => {

    const image = getImage('categories', label);

        return (
            <ErrorBoundary>
                <div className="col-xl-4 col-lg-6 col-md-6 home-page-item" data-name={label} onClick={onClick}>
                    <img className='home-page-img'
                         src={image}
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>{label.toUpperCase()}</p>
                </div>
            </ErrorBoundary>
        )
}
