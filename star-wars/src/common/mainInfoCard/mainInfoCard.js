import React from "react";
import './main-info-card.css';
import SpeciesDetails from './speciesDetails';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';
import RelatedInfoCard from "../relatedInfoCard";

export default class MainInfoCard extends React.Component {

    state = {
        item: {},
        loading: true,
        error: false
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
        const {selectedItem, getData} = this.props;
        getData(selectedItem)
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