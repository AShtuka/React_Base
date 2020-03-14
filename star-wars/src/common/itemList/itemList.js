import React from "react";
import './itemList.css';
import Item from './item';
import ErrorIndicator from '../errorIndicator';
import Spinner from "../spinner";

export default class ItemList extends React.Component {

    state = {
        itemList: null,
        loading: true,
        error: false,
        next: null,
        previous: null
    };

    onItemListLoaded = itemList => {
        if (!itemList.navigationLink.next) {
            this.props.getLastItems(true);
        } else {
            this.props.getLastItems(false);
        }
        this.setState({itemList: itemList.results,
                             loading: false,
                             next: itemList.navigationLink.next,
                             previous: itemList.navigationLink.previous});
    };

    onError = error => {
        this.setState({error: true, loading: false});
    };

    getData = (url) => {
        const { getData } = this.props;
        getData(url)
            .then(this.onItemListLoaded)
            .catch(this.onError)
    };

    componentDidMount() {
        this.getData();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.direct.countItemsToDisplay !== prevProps.direct.countItemsToDisplay) {
            const direct = this.props.direct.direct.split(' ')[0];
            this.setState({loading: true});
            if (direct === "next") {
                this.getData(prevState.next)
            } else {
                this.getData(prevState.previous)
            }
        }
    };


    render() {

        const {itemList, loading, error} = this.state;
        const {onItemSelected} = this.props;

        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ?
            itemList.map(({name, id, category}) => <Item key={id}
                                                         category={category}
                                                         name={name}
                                                         id={id}
                                                         onItemSelected={() => onItemSelected(id, category, name)} />) : null;

        return (
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-5'>
                {errorMassage}
                {spinner}
                {content}
            </div>
        )
    }
}