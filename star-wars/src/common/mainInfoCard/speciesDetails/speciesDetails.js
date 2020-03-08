import React from "react";

export default ({item: {name,
                        classification,
                        designation,
                        height,
                        lifespan,
                        eye,
                        hair,
                        skin,
                        language,
                        homeworld,
                        id}}) => {
    return (
       <>
           <div className="col-md-3">
               <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
                    className="card-img-details"
                    alt="Not Found"/>
           </div>
           <div className="col-md-9">
               <div className="card-body">
                   <h5 className="card-title">{name}</h5>
                   <ul className="list-group list-group-flush">
                       <li className="list-group-item">Classification: {classification}</li>
                       <li className="list-group-item">Designation: {designation}</li>
                       <li className="list-group-item">Danguage: {language}</li>
                       <li className="list-group-item">Homeworld: {homeworld}</li>
                       <li className="list-group-item">Lifespan: {lifespan}</li>
                       <li className="list-group-item">Height: {height}</li>
                       <li className="list-group-item">Hair: {hair}</li>
                       <li className="list-group-item">Skin: {skin}</li>
                       <li className="list-group-item">Yye: {eye}</li>
                   </ul>
               </div>
           </div>
       </>
    )
}