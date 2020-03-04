import React from "react";
import './main-info-card.css'

export default () => {
    return (
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src="https://starwars-visualguide.com/assets/img/films/5.jpg" className="card-img" alt="Not Found"/>
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">Название карточки</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
}