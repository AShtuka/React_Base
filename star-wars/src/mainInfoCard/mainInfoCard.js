import React from "react";
import './main-info-card.css';
import SwapiService from "../services/swapiService";
import StarshipDetails from './starshipDetails';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';

const starShipExistID = [5, 9, 10, 11, 12, 13, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];

export default class MainInfoCard extends React.Component {
    swapiServide = new SwapiService();

    state = {
        starship: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateData();
    };

    onStarshipLoaded = starship => {
        this.setState({starship, loading: false})
    };

    onError = error => {
        this.setState({error: true, loading: false});
    };

    updateData = () => {
        const id = starShipExistID[Math.floor(Math.random()*starShipExistID.length)];
        this.swapiServide
            .getStarships(id)
            .then(this.onStarshipLoaded)
            .catch(this.onError)
    };

    render() {

        const {loading, error} = this.state;
        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <StarshipDetails starship={this.state.starship}/> : null;

        return (<div className='card mb-3 main'>
                    <div className='row no-gutters'>
                        {errorMassage}
                        {spinner}
                        {content}
                    </div>
                </div>)
    }
}