import React from "react";
import ErrorIndicator from "../errorIndicator";
import Spinner from "../spinner";

export default (View, getData, selectedItemID) => {
    return class extends React.Component {

        state = {
            item: {},
            loading: true,
            error: false,
        };

        componentDidMount() {
            this.updateData();
        };

        onItemLoaded = item => {
            this.setState({item, loading: false})
        };

        onError = error => {
            this.setState({error: true, loading: false});
        };

        updateData = () => {
            getData(selectedItemID)
                .then(this.onItemLoaded)
                .catch(this.onError)
        };

        render() {
            const {loading, error, item} = this.state;
            const errorMassage = error ? <ErrorIndicator/> : null;
            const spinner = loading ? <Spinner /> : null;
            const content = !(loading || error) ? <View {...this.props} item={item}/> : null;
            return (<>
                        {errorMassage}
                        {spinner}
                        {content}
                    </>)
        };

    }
}
