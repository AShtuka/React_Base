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
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person =  await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    };

    getAllFilms = async () => {
        const res = await this.getResource('films/');
        return res.results.map(this._transformFilm);
    };

    getFilm = async (id) => {
        const film =  await this.getResource(`films/${id}/`);
        return this._transformFilm(film);
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
        return res.results.map(this._transformVehicle);
    };

    getVehicles = async (id) => {
        const vehicle = await this.getResource(`vehicles/${id}/`);
        return this._transformVehicle(vehicle);
    };

    getAllSpecies = async (url) => {
        let res;
        if (!url) {
            res = await this.getResource('species/');
        } else {
            url = url.split('/');
            res = await this.getResource(`species/${url[url.length - 1]}`);
        }

        const navigationLink = {next: res.next, previous: res.previous};
        return {
            navigationLink,
            results: res.results.map(this._transformSpecies)
        }
    };

    getSpecies = async (id) => {
        const speciest = await this.getResource(`species/${id}/`);
        return this._transformSpecies(speciest);
    };

    getAllPlanets= async () => {
        const res = await this.getResource('planets/');
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return this._transformPlanet(planet);
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
    };

    _transformFilm = film => {
        return {
            id: this._extractId(film),
            title: film.title,
            release: film.release_date,
            director: film.director,
            producer: film.producer,
            openingCrawl: film.opening_crawl
        }
    };

    _transformPerson = person => {
        return {
            id: this._extractId(person),
            name: person.name,
            model: person.model,
            starshipClass: person.starship_class,
            speed: person.max_atmosphering_speed,
            manufacturer: person.manufacturer,
            cost: person.cost_in_credits,
            length: person.length,
            cargoCapacity: person.cargo_capacity,
            crew: person.crew,
            passengers: person.passengers
        }
    };

    _transformPlanet = planet => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            model: planet.model,
            starshipClass: planet.starship_class,
            speed: planet.max_atmosphering_speed,
            manufacturer: planet.manufacturer,
            cost: planet.cost_in_credits,
            length: planet.length,
            cargoCapacity: planet.cargo_capacity,
            crew: planet.crew,
            passengers: planet.passengers
        }
    };

    _transformVehicle = vehicle => {
        return {
            id: this._extractId(vehicle),
            name: vehicle.name,
            model: vehicle.model,
            starshipClass: vehicle.starship_class,
            speed: vehicle.max_atmosphering_speed,
            manufacturer: vehicle.manufacturer,
            cost: vehicle.cost_in_credits,
            length: vehicle.length,
            cargoCapacity: vehicle.cargo_capacity,
            crew: vehicle.crew,
            passengers: vehicle.passengers
        }
    };

    _transformSpecies = species => {
        return {
            id: this._extractId(species),
            name: species.name,
            classification: species.classification,
            designation: species.designation,
            height: species.average_height,
            lifespan: species.average_lifespan,
            eye: species.eye_colors,
            hair: species.hair_colors,
            skin: species.skin_colors,
            language: species.language,
            homeworld: species.homeworld
        }
    }
}

