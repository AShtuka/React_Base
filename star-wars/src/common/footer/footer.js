import React from "react";
import './footer.css';

export default () => {
    return (
        <div className='footer-container'>
            <div className='footer-first-row'>
                <p>
                <span>
                    FOLLOW ME:
                    <a href="https://www.linkedin.com/in/ashtuka/" className='linked-in-link'>Linked<i className="fa fa-linkedin-square"/></a>
                </span>
                    <span>
                    <a href="https://github.com/AShtuka">
                        <i className="fa fa-github-square"/> GitHub
                    </a>
                </span>
                </p>
                <p>
                    DEVELOPED BY:
                    <a href='https://www.linkedin.com/in/ashtuka/' className='linked-in-link'>OLEKSANDR SHTUKA</a>
                    <i className="fa fa-copyright" /> 2020
                </p>
            </div>
            <div className='footer-second-row'>
                <p>
                    Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from
                    <a href="https://starwars.fandom.com/wiki/Main_Page"> Wookiepedia</a>.
                    Original site
                    <a href="https://starwars-visualguide.com/#/"> here</a>
                </p>
            </div>
        </div>
    )
}