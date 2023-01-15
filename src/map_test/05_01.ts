export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 25},
    {name: "Dmitry Sidorov", age: 13}
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    }
]
let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])
let d4 = people.map( man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const dev2 = [
    d1, d2, d3
]

const messages = people.map( man => `Hello ${man.name.split(" "[0])}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return  people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}