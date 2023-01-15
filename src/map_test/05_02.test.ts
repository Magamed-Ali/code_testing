import {CityType} from "../object/02_02";
import {createMessages, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfGovernmentsHouses} from "./05_02";

let city: CityType;

beforeEach(()=> {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                addres: {
                    number: 100,
                    street: {title: "White street 1"}
                },
            },
            {
                buildedAt: 2013,
                repaired: true,
                addres: {
                    number: 300,
                    street: {title: "White street 2"}
                },
            },
            {
                buildedAt: 2014,
                repaired: false,
                addres: {
                    number: 400,
                    street: {title: "White street 3"}
                },
            }
        ],
        governmeentBuildings: [
            {type: "FIRE-STATION",
                budget: 2000,
                staffCount: 25,
                address: {strit: {title: "Central Str1"}}},
            {type: "FIRE-STATION",
                budget: 3000,
                staffCount: 28,
                address: {strit: {title: "Central Str2"}}},
            {type: "HOSPITAL",
                budget: 5000,
                staffCount: 99,
                address: {strit: {title: "Central Str3"}}}

        ],
        citizensNumber: 100000
    }
})

test("list of street titles of goverments buildings", () => {
    let streetsName = getStreetsTitlesOfGovernmentsBuildings(city.governmeentBuildings);

    expect(streetsName.length).toBe(3)
    expect(streetsName[0]).toBe("Central Str1")
    expect(streetsName[1]).toBe("Central Str2")
})

test("list of street titles", () => {
    let streets = getStreetsTitlesOfGovernmentsHouses(city.houses);

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street 1");
    expect(streets[1]).toBe("White street 2");
    expect(streets[2]).toBe("White street 3");
})

test("create greeting messages for streets", ()=> {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street 1");
    expect(messages[1]).toBe("Hello guys from White street 2");
    expect(messages[2]).toBe("Hello guys from White street 3");
})