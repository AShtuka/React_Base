import React from "react";
import ErrorIndicator from "../common/errorIndicator";
import Breadcrumbs from "../common/breadcrumbs";
import MainInfoCard from "../common/mainInfoCard";
import './itemPage.css'

export default class ItemPage extends React.Component {

    state = {
        unexpectedError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({unexpectedError: true});
    }

    render() {

        const {selectedItemID, getData, categoryName, itemName, showSelectedPage, getDataByURL} = this.props;

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
            <div>
                <Breadcrumbs categoryName={categoryName} itemName={itemName} showSelectedPage={showSelectedPage}/>
                <MainInfoCard selectedItemID={selectedItemID} getData={getData} getDataByURL={getDataByURL}/>
            </div>
        )
    }
}