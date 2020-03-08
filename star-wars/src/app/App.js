import React from 'react';
import ItemPage from "../itemPage";
import ErrorIndicator from '../common/errorIndicator';


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
            <ItemPage/>
        )
    }
}
