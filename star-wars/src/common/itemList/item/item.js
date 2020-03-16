import React from "react";
import './item.css';
import ErrorBoundary from "../../errorBoundary";

export default ({name, id, onItemSelected, category, getImage}) => {
    const image = getImage(category, id);
    return (
        <ErrorBoundary>
            <div className="col item" onClick={onItemSelected}>
                <div className="card">
                    <img src={image}
                         className="card-img-top"
                         alt="NOT FOUND"/>
                    <div className="card-footer">
                        {name}
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}