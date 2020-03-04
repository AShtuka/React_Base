import React from 'react'
import TodoListItem from '../TodoListItem'

export default ({todoList, setImportant, setDone, deleteItem}) => {
    const itemsList = todoList
        .map(({id, ...props}) =>
            <li key={id} className="collection-item">
                <TodoListItem itemProps={props}
                              setImportant={() => setImportant(id)}
                              setDone={() => setDone(id)}
                              deleteItem={() => deleteItem(id)}
                />
            </li>);

    return (
                <ul className="collection">
                    {itemsList}
                </ul>
            )
};