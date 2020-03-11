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

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
            <div>
                <Breadcrumbs/>
                <MainInfoCard selectedItem={this.props.selectedItem} getData={this.props.getData}/>
            </div>
        )
    }
}