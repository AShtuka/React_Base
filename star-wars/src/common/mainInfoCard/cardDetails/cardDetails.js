import React from "react";

export default ({name, id, category, field}) => {

    const content = [];
    for (let key in field) {
        content.push(<li key={[key]} className="list-group-item">{[key].toString().toUpperCase()}: {field[key]} </li>)
    }

    return (
       <>
           <div className='main-card-info-img'>
               <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`}
                    className="card-img-details"
                    alt="Not Found"/>
           </div>
           <div className='main-card-info-list'>
               <h5>{name}</h5>
               <ul className="list-group list-group-flush main-card-info-font">
                   {content}
               </ul>
           </div>
       </>
    )
}