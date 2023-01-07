
type citiType = {
    tittle: string
    countryTitleL: string
}

type addressType = {
    streetTitle: string
    city: citiType
}

type technologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>

}
export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            tittle: "Minsk",
            countryTitleL: "Belarus",
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "js"},
        {id: 3, title: "React"},
    ]
}