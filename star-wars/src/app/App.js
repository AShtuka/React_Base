import React from 'react';
import HomePage from '../homePage';
import ItemPage from "../itemPage";
import ItemListPage from "../itemListPage/itemListPage";
import ErrorIndicator from '../common/errorIndicator';
import MainLayout from "../mainLayout";


export default class App extends React.Component {

    state = {
        unexpectedError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({unexpectedError: true});
    }

    render() {

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
                <MainLayout>
                    <HomePage/>
                </MainLayout>
                )
    }
}
