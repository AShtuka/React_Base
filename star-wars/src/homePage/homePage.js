import React from "react";
import './homePage.css'

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col home-page-item">
                    <img className='home-page-img'
                         src="https://starwars-visualguide.com/assets/img/categories/character.jpg"
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>CHARACTERS</p>
                </div>
                <div className="col home-page-item">
                    <img className='home-page-img'
                         src="https://starwars-visualguide.com/assets/img/categories/films.jpg"
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>FILMS</p>
                </div>
                <div className="col home-page-item">
                    <img className='home-page-img'
                         src="https://starwars-visualguide.com/assets/img/categories/species.jpg"
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>SPECIES</p>
                </div>
            </div>
            <div className="row">
                <div className="col home-page-item">
                    <img className='home-page-img'
                         src="https://starwars-visualguide.com/assets/img/categories/starships.jpg"
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>STARSHIPS</p>
                </div>
                <div className="col home-page-item">
                    <img className='home-page-img'
                         src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg"
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>VEHICLES</p>
                </div>
                <div className="col home-page-item">
                    <img className='home-page-img'
                         src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"
                         alt="NOT FOUND"/>
                    <p className='home-page-item-label'>PLANETS</p>
                </div>
            </div>
        </div>
    )
}