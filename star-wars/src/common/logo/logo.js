import React from "react";
import './logo.css';
import ErrorBoundary from "../errorBoundary";

export default () => {

    return (
        <ErrorBoundary>
                <div className='row justify-content-center'>
                    <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"
                         alt="Star Wars Logo"
                         className='logo'/>
                </div>
        </ErrorBoundary>
            )
}