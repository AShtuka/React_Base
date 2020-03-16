import React from "react";
import './main-info-card.css';
import CardDetails from './cardDetails';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';
import RelatedInfoCard from "../relatedInfoCard";
import ErrorBoundary from "../errorBoundary";

export default class MainInfoCard extends React.Component {

    state = {
        item: {},
        loading: true,
        error: false,
        url: null
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
        const {selectedItemID, getData} = this.props;
        getData(selectedItemID)
            .then(this.onItemLoaded)
            .catch(this.onError)
    };

    onItemSelected = url => {
        console.log(url)
    };

    render() {
        let relatedInfoArr = [];
        const {loading, error, item:{relatedInfo, category, id, name, ...field}} = this.state;
        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <CardDetails field ={field}
                                                           category={category}
                                                           name={name}
                                                           id={id}
                                                           getImage={this.props.getImage}/> : null;
        if (!(loading || error)) {
             relatedInfoArr = relatedInfo.map(relatedItem => <RelatedInfoCard itemsList={relatedItem.data}
                                                                              key={relatedItem.title}
                                                                              title={relatedItem.title}
                                                                              onItemSelected={this.onItemSelected}
                                                                              getImage={this.props.getImage}/>);
        }


        return (
                <ErrorBoundary>
                    <div className='main-card-info-container'>
                        {errorMassage}
                        {spinner}
                        {content}
                    </div>
                    <div className='row justify-content-center'>
                        {relatedInfoArr}
                    </div>
                </ErrorBoundary>
        )
    }
}