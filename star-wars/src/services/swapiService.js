import React from "react";

export default class SwapiService extends React.Component {

    _apiBase = 'https://swapi.co/api/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource('people/');
        return res.results;
    };

    getPerson = async (id) => {
        return await this.getResource(`people/${id}/`)
    };

    getAllFilms = async () => {
        const res = await this.getResource('films/');
        return res.results;
    };

    getFilm = async (id) => {
        return await this.getResource(`films/${id}/`)
    };

    getAllStarships = async () => {
        const res = await this.getResource('starships/');
        return res.results.map(this._transformStarship);
    };

    getStarships = async (id) => {
        const starship = await this.getResource(`starships/${id}/`);
        return this._transformStarship(starship);
    };

    getAllVehicles = async () => {
        const res = await this.getResource('vehicles/');
        return res.results;
    };

    getVehicles = async (id) => {
        return await this.getResource(`vehicles/${id}/`)
    };

    getAllSpecies = async () => {
        const res = await this.getResource('species/');
        return res.results;
    };

    getSpecies = async (id) => {
        return await this.getResource(`species/${id}/`)
    };

    getAllPlanets= async () => {
        const res = await this.getResource('planets/');
        return res.results;
    };

    getPlanet = async (id) => {
        return await this.getResource(`planets/${id}/`)
    };

    _extractId = item => {
        const arrWithId = item.url.split('/');
        return arrWithId[arrWithId.length - 2];
    };

    _transformStarship = starship => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            starshipClass: starship.starship_class,
            speed: starship.max_atmosphering_speed,
            manufacturer: starship.manufacturer,
            cost: starship.cost_in_credits,
            length: starship.length,
            cargoCapacity: starship.cargo_capacity,
            crew: starship.crew,
            passengers: starship.passengers
        }
    }
}

