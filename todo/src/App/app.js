import React from "react";
import TodoList from "../TodoList"
import Header from "../Header"
import TodoListItemCreator from '../TodoListItemCreator'

const todoList = [
                    {
                        id: 1,
                        label: 'Drink coffee',
                        isDone: false,
                        isImportant: false
                    },
                    {
                        id: 2,
                        label: 'Create the best app',
                        isDone: false,
                        isImportant: false
                    },
                    {
                        id: 3,
                        label: 'Drink beer',
                        isDone: false,
                        isImportant: false
                    }
                  ];

export default class App extends React.Component {
    ID = 10;
    state = {
      todoData: todoList,
    };

    setItemsProps = (itemsList, propName, id) => {
        const newState = itemsList.map(item => {
            if (item.id === id) {
                return  {...item, [propName]: !item[propName]};
            }
            return item;
        });
        return {todoData: newState};
    };

    setImportant = (id) => {
        this.setState(({todoData}) => {
            return this.setItemsProps(todoData, 'isImportant', id);
        });
    };

    setDone = (id) => {
        this.setState(({todoData}) => {
            return this.setItemsProps(todoData, 'isDone', id);
        });
    };

    createNewItem = label => {
        this.setState(({todoData}) => {
            const newItem = {label, isImportant: false, isDone: false, id: this.ID++};
            return {todoData: [...todoData, newItem]};
        });
    };

    deleteItem = id => {
        this.setState(({todoData}) => {
            const newState = todoData.filter(item => item.id !== id);
            return {todoData: newState};
        });
    };

    render() {
        const {todoData} = this.state;
        return (
            <div className='container'>
                <Header />
                <TodoList todoList={todoData}
                          setImportant={this.setImportant}
                          setDone={this.setDone}
                          deleteItem={this.deleteItem}
                />
                <TodoListItemCreator createNewItem={this.createNewItem}/>
            </div>
        )
    }
};