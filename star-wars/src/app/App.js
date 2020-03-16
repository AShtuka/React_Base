import React from 'react';
import HomePage from '../homePage';
import ItemPage from "../itemPage";
import ItemListPage from "../itemListPage/itemListPage";
import MainLayout from "../mainLayout";
import SwapiService from "../services/swapiService";
import ErrorBoundary from "../common/errorBoundary";


export default class App extends React.Component {

    getData = null;
    swapiService = new SwapiService();

    state = {
        showHomePage: true,
        showItemListPage: false,
        showItemPage: false,
        selectedItemID: null,
        categoryName: null,
        itemName: null
    };

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

    getImage = this.swapiService.getImage;

    render() {

        let content = null;

        const {getData, getImage, showSelectedPage} = this;
        const {showHomePage, showItemListPage, selectedItemID, categoryName, itemName} = this.state;

        if (showHomePage) {
            content = <HomePage chooseCategory={this.chooseCategory}
                                getImage={getImage}/>
        } else if (showItemListPage) {
            content = <ItemListPage getData={getData}
                                    onItemSelected={this.onItemSelected}
                                    categoryName={categoryName}
                                    showSelectedPage={showSelectedPage}
                                    getImage={getImage}/>
        } else {
            content = <ItemPage getData={getData}
                                selectedItemID={selectedItemID}
                                categoryName={categoryName}
                                itemName={itemName}
                                showSelectedPage={showSelectedPage}
                                getDataByURL={this.getDataByURL}
                                getImage={getImage}/>
        }

        return (
                    <ErrorBoundary>
                        <MainLayout>
                            {content}
                        </MainLayout>
                    </ErrorBoundary>
                )
    }
}
