import { CityType } from "../../object/02_02";
import {demoListHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2ts";
import {strict} from "assert";
import {log} from "util";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false,
                addres: {
                    number: 100,
                    street: {title: "White street 1"}
                },
            },
            {
                id: 2,
                buildedAt: 2013,
                repaired: true,
                addres: {
                    number: 300,
                    street: {title: "White street"}
                },
            },
            {
                id: 2,
                buildedAt: 2014,
                repaired: false,
                addres: {
                    number: 400,
                    street: {title: "White street"}
                },
            }
        ],
        governmeentBuildings: [
            {type: "FIRE-STATION", budget: 200, staffCount: 25, address: {strit: {title: "Central Str1"}}},
            {type: "HOSPITAL", budget: 300, staffCount: 28, address: {strit: {title: "Central Str2"}}},
            {type: "FIRE-STATION", budget: 500, staffCount: 999, address: {strit: {title: "Central Str3"}}}

        ],
        citizensNumber: 100000
    }
})

test("Houses should be destroyed", () => {
    demoListHousesOnTheStreet(city, "White street")

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

    console.info(city.houses)
})

test("list of street titles of houses", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmeentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");


})