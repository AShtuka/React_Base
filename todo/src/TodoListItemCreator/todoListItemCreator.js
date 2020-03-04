import React from "react";
import './todoListItemCreator.css'

export default class TodoListItemCreator extends React.Component {
    state = {label: ''};
    createNewItem = (event) => {
        this.setState({label: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createNewItem(this.state.label);
        this.setState({label: ''});
    };

    render() {
        return (
            <form className='item-creator' onSubmit={this.onSubmit}>
                <div className="input-field">
                    <i className="material-icons prefix">add</i>
                    <input type="text"
                           placeholder='New item'
                           onChange={this.createNewItem}
                           value={this.state.label}
                    />
                </div>
                <button type='submit' className="btn">Add new item</button>
            </form>
        )
    }
}