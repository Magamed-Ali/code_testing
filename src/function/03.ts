import {StudentType} from "../object/02";
import {CityType, governmeentBuildingsType, housesType} from "../object/02_02";


export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType){
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.tittle === cityName;
}

export const addMoneyToBudget = (buildingsType: governmeentBuildingsType, budget: number) => {
    buildingsType.budget += budget
}

export const toFireStaff = (governmeent: governmeentBuildingsType, n: number) => {
    governmeent.staffCount -= n
}

export const repairHouse = (house: housesType) => {
    house.repaired = true
}

export const createMessage = (city: CityType) => {
    return city.houses[0].addres.street.title
}