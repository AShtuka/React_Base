import React from "react";
import './related-info-card.css'
import CardItem from './cardItem';
import Navigation from '../navigation'
import ErrorBoundary from "../errorBoundary";

export default class relatedCardInfo extends React.Component {

    countItemsToDisplay = 4;

    state = {
        startPos: 0,
    };


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
        let navigationPanel = null;
        const {startPos} = this.state;
        const {onItemSelected, title, itemsList, getImage} = this.props;


        const content = itemsList.map((itemUrl) => <CardItem key={itemUrl}
                                                             categoryName={title.toLowerCase()}
                                                             url={itemUrl}
                                                             onItemSelected={() => onItemSelected(itemUrl)}
                                                             getImage={getImage}/>);


        if (content) {
            const endPos = startPos + this.countItemsToDisplay;
            if (endPos >= content.length) isEnd = true;
            itemsToDisplay =  content.slice(startPos, endPos);
        };

        if (itemsList.length > this.countItemsToDisplay) {
            navigationPanel = ( <div className="card-footer">
                <Navigation startPos={startPos} isEnd={isEnd} onContentChange={this.onContentChange}/>
            </div>)
        };

        return (
            <ErrorBoundary>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-header">
                            Related {title}
                        </div>
                        <div className="card-body row">
                            {itemsToDisplay}
                        </div>
                        {navigationPanel}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
};