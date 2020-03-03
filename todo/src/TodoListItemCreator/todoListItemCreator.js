import React from "react";
import './todoListItemCreator.css'

export default () => {
    return (
        <form className='item-creator'>
            <div className="input-field">
                <i className="material-icons prefix">add</i>
                <input type="text" placeholder='New item'/>
            </div>
            <span className="btn">Add new item</span>
        </form>
    )
}