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

    getByUrl = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return res.json();
    };

    getNextPage = async (url, categoryName) => {
        let pageNumber = url.split('/');
        pageNumber = pageNumber[pageNumber.length - 1];
        return  await this.getResource(`${categoryName}/${pageNumber}`);
    };

    getAllCharacters = async (url) => {
        const res = url ? await this.getNextPage(url, 'people') : await this.getResource('people/');
        return {
            navigationLink: {next: res.next, previous: res.previous},
            results: res.results.map(this._transformPerson)
        };
    };

    getCharacter = async (id) => {
        const person =  await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    };

    getAllFilms = async (url) => {
        const res = url ? await this.getNextPage(url, 'films') : await this.getResource('films/');
        return {
            navigationLink: {next: res.next, previous: res.previous},
            results: res.results.map(this._transformFilm)
        };
    };

    getFilm = async (id) => {
        const film =  await this.getResource(`films/${id}/`);
        return this._transformFilm(film);
    };

    getAllStarships = async (url) => {
        const res = url ? await this.getNextPage(url, 'starships') : await this.getResource('starships/');
        return {
            navigationLink: {next: res.next, previous: res.previous},
            results: res.results.map(this._transformStarship)
        };
    };

    getStarships = async (id) => {
        const starship = await this.getResource(`starships/${id}/`);
        return this._transformStarship(starship);
    };

    getAllVehicles = async (url) => {
        const res = url ? await this.getNextPage(url, 'vehicles') : await this.getResource('vehicles/');
        return {
            navigationLink: {next: res.next, previous: res.previous},
            results: res.results.map(this._transformVehicle)
        };
    };

    getVehicles = async (id) => {
        const vehicle = await this.getResource(`vehicles/${id}/`);
        return this._transformVehicle(vehicle);
    };

    getAllSpecies = async (url) => {
        const res = url ? await this.getNextPage(url, 'species') : await this.getResource('species/');
        return {
            navigationLink: {next: res.next, previous: res.previous},
            results: res.results.map(this._transformSpecies)
        };
    };

    getSpecies = async (id) => {
        const speciest = await this.getResource(`species/${id}/`);
        return this._transformSpecies(speciest);
    };

    getAllPlanets= async (url) => {
        const res = url ? await this.getNextPage(url, 'planets') : await this.getResource('planets/');
        return {
            navigationLink: {next: res.next, previous: res.previous},
            results: res.results.map(this._transformPlanet)
        };
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
            passengers: starship.passengers,
            category: 'starships',
            relatedInfo: [{data: starship.pilots, title: 'Pilots'},
                {data: starship.films, title: 'Films'}],
        }
    };

    _transformFilm = film => {
        return {
            id: this._extractId(film),
            name: film.title,
            release: film.release_date,
            director: film.director,
            producer: film.producer,
            openingCrawl: film.opening_crawl,
            category: 'films',
            relatedInfo: [{data: film.characters, title: 'Characters'},
                          {data: film.planets, title: 'Planets'},
                          {data: film.vehicles, title: 'Vehicles'},
                          {data: film.starships, title: 'Starships'},
                          {data: film.species, title: 'Species'}],
        }
    };

    _transformPerson = person => {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            eye: person.eye_color,
            gender: person.gender,
            hair: person.hair_color,
            height: person.height,
            mass: person.mass,
            skin: person.skin_color,
            homeworld: person.homeworld,
            category: 'characters',
            relatedInfo: [{data: person.species, title: 'Species'},
                          {data: person.films, title: 'Films'},
                          {data: person.vehicles, title: 'Vehicles'},
                          {data: person.starships, title: 'Starships'}],
        }
    };

    _transformPlanet = planet => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            rotationPeriod: planet.rotation_period,
            orbitalPeriod: planet.orbital_period,
            gravity: planet.gravity,
            population: planet.population,
            climate: planet.climate,
            terrain: planet.terrain,
            surfaceWater: planet.surface_water,
            category: 'planets',
            relatedInfo: [{data: planet.residents, title: 'Residents'},
                {data: planet.films, title: 'Films'}],
        }
    };

    _transformVehicle = vehicle => {
        return {
            id: this._extractId(vehicle),
            name: vehicle.name,
            model: vehicle.model,
            vehicleClass: vehicle.vehicle_class,
            speed: vehicle.max_atmosphering_speed,
            manufacturer: vehicle.manufacturer,
            cost: vehicle.cost_in_credits,
            length: vehicle.length,
            cargoCapacity: vehicle.cargo_capacity,
            crew: vehicle.crew,
            passengers: vehicle.passengers,
            consumables: vehicle.consumables,
            category: 'vehicles',
            relatedInfo: [{data: vehicle.pilots, title: 'Pilots'},
                {data: vehicle.films, title: 'Films'}],
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
            homeworld: species.homeworld,
            category: 'species',
            relatedInfo: [{data: species.people, title: 'Characters'},
                          {data: species.films, title: 'Films'}],
        }
    }
}

