import React from "react";
import HomePageItem from './homePageItem';

export default ({chooseCategory, getImage}) => {
    const homePageItemList = ['character', 'films', 'species', 'starships', 'vehicles', 'planets'];

    const onClickHandler = event => {
        chooseCategory(event.currentTarget.dataset.name);
    };

    const content = homePageItemList.map(label => <HomePageItem key={label}
                                                                onClick={onClickHandler}
                                                                label={label} getImage={getImage}/>);

    return (
            <div className="row">
                {content}
            </div>

    )
}