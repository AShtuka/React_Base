import React from "react";
import './search.css'

export default () => {
    return (
                <form className='search'>
                    <div className="input-field">
                        <i className="material-icons prefix">search</i>
                        <input type="text" placeholder='What are you looking for?'/>
                    </div>
                </form>
            )
};