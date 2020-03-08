import React from "react";
import './main-info-card.css';
import SwapiService from "../../services/swapiService";
import SpeciesDetails from './speciesDetails';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';

export default class MainInfoCard extends React.Component {
    swapiService = new SwapiService();

    state = {
        item: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateData();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedItem !== prevProps.selectedItem) {
            this.setState({loading: true});
            this.updateData();
        }
    };

    onItemLoaded = item => {
        this.setState({item, loading: false})
    };

    onError = error => {
        this.setState({error: true, loading: false});
    };

    updateData = () => {
        const {selectedItem} = this.props;
        this.swapiService
            .getSpecies(selectedItem)
            .then(this.onItemLoaded)
            .catch(this.onError)
    };

    render() {

        const {loading, error} = this.state;
        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <SpeciesDetails item ={this.state.item}/> : null;

        return (<div className='card mb-3 main'>
                    <div className='row no-gutters'>
                        {errorMassage}
                        {spinner}
                        {content}
                    </div>
                </div>)
    }
}