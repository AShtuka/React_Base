import React from "react";
import './todoListItem.css'

export default ({itemProps: {label, isDone, isImportant}, setImportant, setDone, deleteItem}) => {
    let classes = '';
    if (isImportant) classes += 'teal-text ';
    if (isDone) classes += 'todo-list-item-done ';
    return (
                <div className={classes}>
                    <span onClick={setDone}>{label}</span>
                    <a href="#!" className="secondary-content">
                        <i className="material-icons del" onClick={deleteItem}>delete_forever</i>
                        <i className="material-icons" onClick={setImportant}>priority_high</i>
                    </a>
                </div>
            )
}