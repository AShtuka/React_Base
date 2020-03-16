import React from "react";
import './mainLayout.css'
import Logo from '../common/logo';
import Footer from '../common/footer';
import ErrorBoundary from "../common/errorBoundary";

export default (props) => {
    return (
            <div className='main-container'>
                <div className='content'>
                    <ErrorBoundary>
                        <Logo/>
                    </ErrorBoundary>
                    {props.children}
                </div>
                <ErrorBoundary>
                    <Footer/>
                </ErrorBoundary>
            </div>
            )

}