import React from "react";
import './search.css'

export default class Search extends React.Component {

    state = {term:''};

    changeTerm = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.searchTermChange(term);
    };

    render() {
        return (
            <form className='search'>
                <div className="input-field">
                    <i className="material-icons prefix">search</i>
                    <input type="text"
                           placeholder='What are you looking for?'
                           value={this.state.term}
                           onChange={this.changeTerm}
                    />
                </div>
            </form>
        )
    }
};