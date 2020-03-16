import React from "react";
import ErrorIndicator from "../errorIndicator";

export default class ErrorBoundary extends React.Component {

    state = {
        unexpectedError: false
    };

    componentDidCatch() {
        this.setState({unexpectedError: true});
    };

    render() {

        if (this.state.unexpectedError) return <ErrorIndicator/>;

        return this.props.children;
    };
}