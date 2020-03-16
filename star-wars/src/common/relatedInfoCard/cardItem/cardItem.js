import React from "react";
import './card-item.css'
import SwapiService from "../../../services/swapiService";
import ErrorIndicator from '../../errorIndicator';
import Spinner from "../../spinner";
import ErrorBoundary from "../../errorBoundary";

export default class RelatedCardItem extends React.Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        error: false,
    };

    onItemLoaded = item => {
        this.setState({item, loading: false});
    };

    onError = error => {
        this.setState({error: true, loading: false});
    };

    componentDidMount() {
        this.swapiService
            .getByUrl(this.props.url)
            .then(this.onItemLoaded)
            .catch(this.onError)
    }

    _extractId = item => {
        const arrWithId = item.split('/');
        return arrWithId[arrWithId.length - 2];
    };


    render() {
        const {url, categoryName, onItemSelected, getImage} = this.props;
        const {item, loading, error} = this.state;
        const id = this._extractId(url);
        let category = categoryName;
        if (category === 'pilots' || category ==='residents') {
            category = 'characters';
        }
        const image = getImage(category, id);
        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ?
            (<div className="card">
                <img src={image} className="card-img-top" alt="NOT FOUND" />
                <div className="card-body card-item">
                    <a href="#!" onClick={onItemSelected}>{item.name}{item.title}</a>
                </div>
            </div> ): null;

        return (
            <ErrorBoundary>
                <div className='col-md-3 col-sm-3 col-3 card-padding'>
                    {errorMassage}
                    {spinner}
                    {content}
                </div>
            </ErrorBoundary>
        )
    }
}