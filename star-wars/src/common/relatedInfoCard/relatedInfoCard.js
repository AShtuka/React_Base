import React from "react";
import SwapiService from "../../services/swapiService";
import './related-info-card.css'
import CardItem from './cardItem';
import Navigation from '../navigation';
import ErrorIndicator from '../errorIndicator';
import Spinner from "../spinner";

export default class relatedCardInfo extends React.Component {

    swapiService = new SwapiService();
    countItemsToDisplay = 4;

    state = {
        filmList: null,
        loading: true,
        error: false,
        startPos: 0
    };

    onFilmListLoaded = filmList => {
        this.setState({filmList, loading: false});
    };

    onError = error => {
        this.setState({error: true, loading: false});
    };

    componentDidMount() {
        this.swapiService
            .getAllFilms()
            .then(this.onFilmListLoaded)
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

        let itemsToDisplay = [];
        let isEnd = false;
        const {filmList, loading, error, startPos} = this.state;
        const {onItemSelected} = this.props;

        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ?
              filmList.map(({title, id}) => <CardItem key={id} title={title} id={id} onItemSelected={() => onItemSelected(id)}/>) : null;
        if (content) {
            const endPos = startPos + this.countItemsToDisplay;
            if (endPos >= content.length) isEnd = true;
            itemsToDisplay =  content.slice(startPos, endPos);
        };

        return (
            <div className='col-md-6'>
                <div className="card">
                    <div className="card-header">
                        Related Info
                    </div>
                    <div className="card-body row">
                        {errorMassage}
                        {spinner}
                        {itemsToDisplay}
                    </div>
                    <div className="card-footer">
                        <Navigation startPos={startPos} isEnd={isEnd} onContentChange={this.onContentChange}/>
                    </div>
                </div>
            </div>
        )
    }
};