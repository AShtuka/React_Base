import React from "react";
import './main-info-card.css';
import SwapiService from "../services/swapiService";
import StarshipDetails from './starshipDetails';
import Spinner from '../spinner';

export default class MainInfoCard extends React.Component {
    swapiServide = new SwapiService();

    state = {
        starship: {}
    };

    constructor() {
        super();
        this.updateData();
    }

    onStarshipLoaded = starship => {
        this.setState({starship})
    };

    updateData = () => {
        const id = 9;
        this.swapiServide
            .getStarships(id)
            .then(this.onStarshipLoaded)
    };

    render() {
        return (<>
                    <StarshipDetails starship={this.state.starship}/>
                    <Spinner/>
                </>)
    }
}