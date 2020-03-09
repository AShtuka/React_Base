import React from "react";
import './main-info-card.css';
import SwapiService from "../../services/swapiService";
import SpeciesDetails from './speciesDetails';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';
import RelatedInfoCard from "../relatedInfoCard";

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
        let relatedInfo = [];
        const {loading, error, item} = this.state;
        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <SpeciesDetails item ={item}/> : null;
        if (!(loading || error)) {
             relatedInfo = item.relatedInfo.map(relatedItem => <RelatedInfoCard itemsList={relatedItem.data}
                                                                                key={relatedItem.title}
                                                                                title={relatedItem.title}
                                                                                onItemSelected={this.onItemSelected}/>);
        }


        return (
                <>
                    <div className='main-card-info-container'>
                        {errorMassage}
                        {spinner}
                        {content}
                    </div>
                    <div className='row justify-content-center'>
                        {relatedInfo}
                    </div>
                </>
        )
    }
}