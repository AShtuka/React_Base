import React from "react";

export default ({film: {title, release, director, producer, id, openingCrawl}}) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
                         className="card-img"
                         alt="Not Found"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Release: {release}</li>
                            <li className="list-group-item">Director: {director}</li>
                            <li className="list-group-item">Producer(s): {producer}</li>
                            <li className="list-group-item">Opening Crawl: {openingCrawl}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}