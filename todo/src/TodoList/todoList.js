import React from 'react'
import TodoListItem from '../TodoListItem'

export default () => {
    return (
                <ul className="collection">
                    <li className="collection-item"><TodoListItem /></li>
                    <li className="collection-item"><TodoListItem /></li>
                    <li className="collection-item"><TodoListItem /></li>
                </ul>
            )
};