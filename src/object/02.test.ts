import {CityType} from "./02_02";

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

test.skip("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].addres.number).toBe(100);
    expect(city.houses[0].addres.street.title).toBe("White street 1");

})

test.skip("test city should contains hospital and fire station", () => {
    expect(city.governmeentBuildings.length).toBe(3);

    expect(city.governmeentBuildings[0].type).toBe("FIRE-STATION");
    expect(city.governmeentBuildings[0].budget).toBe(2000);
    expect(city.governmeentBuildings[0].staffCount).toBe(25);
    expect(city.governmeentBuildings[0].address.strit.title).toBe("Central Str1");

})