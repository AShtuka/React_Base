import React from "react";
import TodoList from "../TodoList"
import Header from "../Header"
import TodoListItemCreator from '../TodoListItemCreator'

export default () => {
    return (
                <div className='container'>
                    <Header />
                    <TodoList/>
                    <TodoListItemCreator/>
                </div>
            )
};