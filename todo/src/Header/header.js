import React from "react";
import './header.css';
import Search from "../Search"
import Filter from "../Filter"
import Badges from "../Badges"

export default ({activeTask, doneTask, statusFilter, filterChange, searchTermChange}) => {
    return (
                <div className='header'>
                    <div>
                        <h4>Todo List</h4>
                        <Badges activeTask={activeTask} doneTask={doneTask}/>
                    </div>
                    <div>
                        <Search searchTermChange={searchTermChange}/>
                        <Filter statusFilter={statusFilter}
                                filterChange={filterChange}
                        />
                    </div>
                </div>
            )
};