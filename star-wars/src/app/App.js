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
        selectedItemID: null,
        categoryName: null,
        itemName: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({unexpectedError: true});
    }

    getFunc = (category, itemID) => {
        switch (category) {
            case 'character':
            case 'characters': {
                this.getData = itemID ? this.swapiService.getCharacter : this.swapiService.getAllCharacters;
                break;
            }
            case 'films': {
                this.getData = itemID ? this.swapiService.getFilm : this.swapiService.getAllFilms;
                break;
            }
            case 'species': {
                this.getData = itemID ? this.swapiService.getSpecies : this.swapiService.getAllSpecies;
                break;
            }
            case 'starships': {
                this.getData = itemID ? this.swapiService.getStarships : this.swapiService.getAllStarships;
                break;
            }
            case 'vehicles': {
                this.getData = itemID ? this.swapiService.getVehicles : this.swapiService.getAllVehicles;
                break;
            }
            case 'planets': {
                this.getData = itemID ? this.swapiService.getPlanet : this.swapiService.getAllPlanets;
                break;
            }
            default: return null
        }
    };

    chooseCategory = category => {
        this.getFunc(category);
        this.setState({showHomePage: false, showItemListPage: true, categoryName: category})
    };

    onItemSelected = (selectedItemID, category, name) => {
        this.getFunc(category, selectedItemID);
        this.setState({showItemPage: true, showItemListPage: false, showHomePage: false, selectedItemID, categoryName: category, itemName: name})
    };

    showSelectedPage = (categoryName, itemName) => {
        if (!itemName) {
            this.setState({showItemPage: false, showItemListPage: false, showHomePage: true})
        } else {
            this.chooseCategory(categoryName);
        }
    };

    getDataByURL = () => {
        return this.swapiService.getByUrl;
    };

    render() {

        const {showHomePage, showItemListPage, selectedItemID, categoryName, itemName} = this.state;

        let content = null;
        if (showHomePage) {
            content = <HomePage chooseCategory={this.chooseCategory}/>
        } else if (showItemListPage) {
            content = <ItemListPage getData={this.getData}
                                    onItemSelected={this.onItemSelected}
                                    categoryName={categoryName}
                                    showSelectedPage={this.showSelectedPage}/>
        } else {
            content = <ItemPage getData={this.getData}
                                selectedItemID={selectedItemID}
                                categoryName={categoryName}
                                itemName={itemName}
                                showSelectedPage={this.showSelectedPage}
                                getDataByURL={this.getDataByURL}/>
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
