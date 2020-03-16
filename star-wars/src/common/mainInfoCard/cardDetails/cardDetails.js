import React from "react";
import ErrorBoundary from "../../errorBoundary";

export default ({name, id, category, field, getImage}) => {

    const content = [];
    for (let key in field) {
        content.push(<li key={[key]} className="list-group-item">{[key].toString().toUpperCase()}: {field[key]} </li>)
    }

    const image = getImage(category, id);

    return (
       <ErrorBoundary>
           <div className='main-card-info-img'>
               <img src={image}
                    className="card-img-details"
                    alt="Not Found"/>
           </div>
           <div className='main-card-info-list'>
               <h5>{name}</h5>
               <ul className="list-group list-group-flush main-card-info-font">
                   {content}
               </ul>
           </div>
       </ErrorBoundary>
    )
}