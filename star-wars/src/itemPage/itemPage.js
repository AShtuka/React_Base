import React from "react";
import Breadcrumbs from "../common/breadcrumbs";
import MainInfoCard from "../common/mainInfoCard";
import './itemPage.css'

export default ({selectedItemID, getData, categoryName, itemName, showSelectedPage, getImage}) => {

    return (
            <>
                <Breadcrumbs categoryName={categoryName}
                             itemName={itemName}
                             showSelectedPage={showSelectedPage}/>
                <MainInfoCard selectedItemID={selectedItemID}
                              getData={getData}
                              getImage={getImage}/>
            </>
        )
}