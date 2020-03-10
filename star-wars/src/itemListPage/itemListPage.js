import React from "react";
import ErrorIndicator from "../common/errorIndicator";
import Breadcrumbs from "../common/breadcrumbs";
import ItemList from "../common/itemList";
import Navigation from '../common/navigation';
import './itemListPage.css'

export default class ItemListPage extends React.Component {

    countItemsToDisplay = 10;

    state = {
        unexpectedError: false,
        direct: null,
        startPos: 0,
        isEnd: false
    };

    onItemSelected = selectedItem => {
        this.setState({selectedItem})
    };

    componentDidCatch(error, errorInfo) {
        this.setState({unexpectedError: true});
    }

    onContentChange = event => {
        const direct = event.target.dataset.name;
        if (direct === 'next') {
            this.setState(({startPos}) => ({startPos: startPos += this.countItemsToDisplay, direct}));
        } else {
            this.setState(({startPos}) => ({startPos: startPos -= this.countItemsToDisplay, direct}));
        }
    };

    getLastItems = isEnd => {
        this.setState({isEnd});
    };

    render() {

        const {startPos, direct, isEnd} = this.state;
        let start = 0;
        if (startPos > 0) {
            start = startPos;
        }

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
            <div>
                <div className='item-page-navigation'>
                    <Breadcrumbs/>
                    <Navigation startPos={start} isEnd={isEnd} onContentChange={this.onContentChange}/>
                </div>
                <ItemList onItemSelected={this.onItemSelected}
                          direct={{direct, countItemsToDisplay: startPos}}
                          getLastItems={this.getLastItems}/>
            </div>
        )
    }
}