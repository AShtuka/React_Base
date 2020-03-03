import React from "react";
import './header.css';
import Search from "../Search"
import Filter from "../Filter"
import Badges from "../Badges"

export default () => {
    return (
                <div className='header'>
                    <div>
                        <h4>Todo List</h4>
                        <Badges/>
                    </div>
                    <div>
                        <Search/>
                        <Filter/>
                    </div>
                </div>
            )
};