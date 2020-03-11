import React from 'react';
import HomePage from '../homePage';
import ItemPage from "../itemPage";
import ItemListPage from "../itemListPage/itemListPage";
import ErrorIndicator from '../common/errorIndicator';
import MainLayout from "../mainLayout";
import SwapiService from "../services/swapiService";


export default class App extends React.Component {

    getData = null;
    swapiService = new SwapiService();

    state = {
        unexpectedError: false,
        showHomePage: true,
        showItemListPage: false,
        showItemPage: false,
        selectedItem: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({unexpectedError: true});
    }

    chooseCategory = category => {
        switch (category) {
            case 'character': {
                this.getData = this.swapiService.getAllCharacters;
                break;
            }
            case 'films': {
                this.getData = this.swapiService.getAllFilms;
                break;
            }
            case 'species': {
                this.getData = this.swapiService.getAllSpecies;
                break;
            }
            case 'starships': {
                this.getData = this.swapiService.getAllStarships;
                break;
            }
            case 'vehicles': {
                this.getData = this.swapiService.getAllVehicles;
                break;
            }
            case 'planets': {
                this.getData = this.swapiService.getAllPlanets;
                break;
            }
            default: return null
        }
        this.setState({showHomePage: false, showItemListPage: true})
    };

    onItemSelected = (selectedItem, category) => {
        switch (category) {
            case 'characters': {
                this.getData = this.swapiService.getCharacter;
                break;
            }
            case 'films': {
                this.getData = this.swapiService.getFilm;
                break;
            }
            case 'species': {
                this.getData = this.swapiService.getSpecies;
                break;
            }
            case 'starships': {
                this.getData = this.swapiService.getStarships;
                break;
            }
            case 'vehicles': {
                this.getData = this.swapiService.getVehicles;
                break;
            }
            case 'planets': {
                this.getData = this.swapiService.getPlanet;
                break;
            }
            default: return null
        }
        this.setState({showItemPage: true, showItemListPage: false, selectedItem})
    };

    render() {

        const {showHomePage, showItemListPage, selectedItem} = this.state;

        let content = null;
        if (showHomePage) {
            content = <HomePage chooseCategory={this.chooseCategory}/>
        } else if (showItemListPage) {
            content = <ItemListPage getData={this.getData}
                                    onItemSelected={this.onItemSelected}/>
        } else {
            content = <ItemPage getData={this.getData} selectedItem={selectedItem}/>
        }

        if (this.state.unexpectedError) {
            return <ErrorIndicator/>
        };

        return (
                <MainLayout>
                    {content}
                </MainLayout>
                )
    }
}
