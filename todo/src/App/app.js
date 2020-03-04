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
        filter: 'All',
        term:''
    };

    filter = (filter, items) => {
        switch (filter) {
            case 'All': return items;
            case 'Active': return items.filter(item => !item.isDone);
            case 'Done': return items.filter(item => item.isDone);
            default: return items;
        };
    };

    filterChange = filter => {
        this.setState({filter});
    };

    searchTermChange = term => {
        this.setState({term});
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

    search = (items, term) => {
        if (term.length === 0) return items;
        return items.filter(item => item.label.toLowerCase()
                                    .indexOf(term.toLowerCase()) > -1);
    };

    render() {
        const {todoData, filter, term} = this.state;
        const visibleItems = this.filter(filter, this.search(todoData, term));
        const doneTask = todoData.filter(item => item.isDone).length;
        const activeTask = todoData.length - doneTask;

        return (
            <div className='container'>
                <Header activeTask={activeTask}
                        doneTask={doneTask}
                        statusFilter={filter}
                        filterChange={this.filterChange}
                        searchTermChange={this.searchTermChange}
                />
                <TodoList todoList={visibleItems}
                          setImportant={this.setImportant}
                          setDone={this.setDone}
                          deleteItem={this.deleteItem}
                />
                <TodoListItemCreator createNewItem={this.createNewItem}/>
            </div>
        )
    }
};