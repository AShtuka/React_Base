import React from "react";
import './breadcrumbs.css';
import ErrorBoundary from "../errorBoundary";

export default ({categoryName, itemName, showSelectedPage}) => {
    const categoryLink = itemName ?
        <li className="breadcrumb-item">
            <a href="#!" onClick={() => showSelectedPage(categoryName, itemName)}>{categoryName}</a>
        </li>
        :
        <li className="breadcrumb-item active" aria-current="page">{categoryName}</li>;

    const itemLink = itemName ? <li className="breadcrumb-item active" aria-current="page">{itemName}</li> : null;

    return (
            <ErrorBoundary>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#!" onClick={() => showSelectedPage(categoryName)}>Home</a></li>
                        {categoryLink}
                        {itemLink}
                    </ol>
                </nav>
            </ErrorBoundary>
            )
}