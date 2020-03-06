import React from "react";

export default ({starship: {name, model, starshipClass, speed, id, manufacturer, cost, crew, length, passengers, cargoCapacity}}) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                         className="card-img"
                         alt="Not Found"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Model: {model}</li>
                            <li className="list-group-item">Manufacturer: {manufacturer}</li>
                            <li className="list-group-item">Starship Class: {starshipClass}</li>
                            <li className="list-group-item">Cost: {cost} credits</li>
                            <li className="list-group-item">Speed: {speed}</li>
                            <li className="list-group-item">Length: {length}m</li>
                            <li className="list-group-item">Cargo Capacity: {cargoCapacity} metric tons</li>
                            <li className="list-group-item">Crew: {crew}</li>
                            <li className="list-group-item">Passengers: {passengers}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}