import React from "react";
import './itemList.css';
import Item from './item';
import SwapiService from "../../services/swapiService";
import ErrorIndicator from '../errorIndicator';
import Spinner from "../spinner";

export default class ItemList extends React.Component {

    countItemsToDisplay = 8;
    swapiService = new SwapiService();

    state = {
        itemList: null,
        loading: true,
        error: false,
        startPos: 0
    };

    onItemListLoaded = itemList => {
        this.setState({itemList, loading: false});
    };

    onError = error => {
        this.setState({error: true, loading: false});
    };

    componentDidMount() {
        this.swapiService
            .getAllSpecies()
            .then(this.onItemListLoaded)
            .catch(this.onError)
    }

    onContentChange = event => {
        const direct = event.target.dataset.name;
        if (direct === 'next') {
            this.setState(({startPos}) => ({startPos: startPos += this.countItemsToDisplay}));
        } else {
            this.setState(({startPos}) => ({startPos: startPos -= this.countItemsToDisplay}));
        }
    };


    render() {

        const {itemList, loading, error} = this.state;
        const {onItemSelected} = this.props;

        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ?
            itemList.map(({name, id}) => <Item key={id}
                                               name={name}
                                               id={id}
                                               onItemSelected={() => onItemSelected(id)} />) : null;

        return (
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-5'>
                {errorMassage}
                {spinner}
                {content}
            </div>
        )
    }
}