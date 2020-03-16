import React from "react";
import Breadcrumbs from "../common/breadcrumbs";
import ItemList from "../common/itemList";
import Navigation from '../common/navigation';
import './itemListPage.css'

export default class ItemListPage extends React.Component {

    countItemsToDisplay = 10;

    state = {
        direct: null,
        startPos: 0,
        isEnd: false
    };

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

        const {onItemSelected, getData, categoryName, showSelectedPage, getImage} = this.props;

        const {startPos, direct, isEnd} = this.state;
        let start = 0;
        if (startPos > 0) {
            start = startPos;
        }

        return (
            <div>
                <div className='item-page-navigation'>
                    <Breadcrumbs categoryName={categoryName} showSelectedPage={showSelectedPage}/>
                    <Navigation startPos={start} isEnd={isEnd} onContentChange={this.onContentChange}/>
                </div>
                <ItemList onItemSelected={onItemSelected} getData={getData}
                          direct={{direct, countItemsToDisplay: startPos}}
                          getLastItems={this.getLastItems}
                          getImage={getImage}/>
            </div>
        )
    }
}