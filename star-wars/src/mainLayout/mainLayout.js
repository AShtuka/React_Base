import React from "react";
import './mainLayout.css'
import Logo from '../common/logo';
import Footer from '../common/footer'

export default (props) => {
    return (
            <div className='main-container'>
                <div className='content'>
                    <Logo/>
                    {props.children}
                </div>
                <Footer/>
            </div>
            )

}