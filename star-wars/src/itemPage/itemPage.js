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

    state = {
        selectedItem: 5,
        unexpectedError: false,
    };

    onItemSelected = selectedItem => {
        this.setState({selectedItem})
    };

    componentDidCatch(error, errorInfo) {
        this.setState({unexpectedError: true});
    }

    render() {

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
            <div className='main-container'>
                <Logo/>
                <div className='item-page-navigation'>
                    <Breadcrumbs/>
                    <Navigation/>
                </div>
                <ItemList onItemSelected={this.onItemSelected}/>
                <MainInfoCard selectedItem={this.state.selectedItem}/>
                <div className='row justify-content-center'>
                    <RelatedInfoCard onItemSelected={this.onItemSelected}/>
                </div>
            </div>
        )
    }
}