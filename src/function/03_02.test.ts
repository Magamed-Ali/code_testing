import {CityType} from "../object/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff} from "./03";


let city: CityType;

beforeEach(() => {
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
                    street: {title: "White street 2 "}
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
            {type: "FIRE-STATION", budget: 2000, staffCount: 25, address: {strit: {title: "Central Str1"}}},
            {type: "FIRE-STATION", budget: 3000, staffCount: 28, address: {strit: {title: "Central Str2"}}},
            {type: "HOSPITAL", budget: 5000, staffCount: 99, address: {strit: {title: "Central Str3"}}}

        ],
        citizensNumber: 100000
    }
})

test("Budget should be changed for HOSPITAL", () => {

    addMoneyToBudget(city.governmeentBuildings[0], 1000)
    expect(city.governmeentBuildings[0].budget).toBe(3000);


})

test("Budget should be changed for FIRE-STATION", () => {

    addMoneyToBudget(city.governmeentBuildings[1], -1000)
    expect(city.governmeentBuildings[1].budget).toBe(2000);

})

test("House should be repared", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})
test("staff should be increased", () => {
    toFireStaff(city.governmeentBuildings[0], 20)
    toFireStaff(city.governmeentBuildings[1], 200)

    expect(city.governmeentBuildings[0].staffCount).toBe(5)
    expect(city.governmeentBuildings[1].staffCount).toBe(-172)
})

test("Greeting message should be correct for city", () => {
    const message = createMessage(city)

    expect(message).toBe("White street 1")
})