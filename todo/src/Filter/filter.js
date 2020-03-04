import React from "react";
import './filter.css'

const buttons = [
    {name: 'All', label: 'All'},
    {name: 'Active', label: 'Active'},
    {name: 'Done', label: 'Done'}
];

export default class ItemFilter extends React.Component {

    render() {
        const {statusFilter, filterChange} = this.props;
        const buttonsList = buttons.map(({name, label}) => {
            const isActive = statusFilter === name;
            const classes = isActive ? 'btn' : 'btn grey';
            return <button key={name}
                           type='button'
                           className={classes}
                           onClick={() => filterChange(name)}>
                    {label}
                    </button>
        });

        return (
            <div className='filter'>
                {buttonsList}
            </div>
        )
    }


}