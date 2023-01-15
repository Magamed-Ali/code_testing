import {CityType, governmeentBuildingsType} from "../../object/02_02";

export function demoListHousesOnTheStreet(city: CityType, street: string){
    city.houses = city.houses.filter(item => item.addres.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(cit: Array<governmeentBuildingsType>, it: number){
    return  cit.filter(item => item.staffCount > it);
}