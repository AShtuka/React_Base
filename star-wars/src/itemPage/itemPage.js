import React from "react";
import ErrorIndicator from "../common/errorIndicator";
import Logo from "../common/logo";
import Breadcrumbs from "../common/breadcrumbs";
import MainInfoCard from "../common/mainInfoCard";
import RelatedInfoCard from "../common/relatedInfoCard";
import ItemList from "../common/itemList";
import Navigation from '../common/navigation';
import './itemPage.css'

export default class ItemPage extends React.Component {

    countItemsToDisplay = 10;

    state = {
        selectedItem: 5,
        unexpectedError: false,
        direct: null,
        startPos: 0
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

    render() {

        const {startPos, direct} = this.state;
        let start = 0;
        if (startPos > 0) {
            start = startPos;
        }

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
            <div className='main-container'>
                <Logo/>
                <div className='item-page-navigation'>
                    <Breadcrumbs/>
                    <Navigation startPos={start} onContentChange={this.onContentChange}/>
                </div>
                <ItemList onItemSelected={this.onItemSelected} direct={{direct, countItemsToDisplay: startPos}}/>
                <MainInfoCard selectedItem={this.state.selectedItem}/>
                <div className='row justify-content-center'>
                    <RelatedInfoCard onItemSelected={this.onItemSelected}/>
                    <RelatedInfoCard onItemSelected={this.onItemSelected}/>
                </div>
            </div>
        )
    }
}