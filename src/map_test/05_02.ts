import {governmeentBuildingsType, housesType} from "../object/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<governmeentBuildingsType>) => {
    return buildings.map( b => b.address.strit.title)
}

export const getStreetsTitlesOfGovernmentsHouses = (houses: Array<housesType>) => {
    return houses.map( h => h.addres.street.title)
}

export const createMessages = (streets: Array<housesType>) => {
    return streets.map( s => `Hello guys from ${s.addres.street.title}`)
}