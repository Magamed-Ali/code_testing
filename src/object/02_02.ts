
type housesType = {
    buildedAt: number
    repaired: boolean
    addres: addresType
}
type addresType = {
    number: number
    street: streetType
}
type streetType = {
    title: string
}


type titleType = {
    title: string
}
type stritType = {
    strit: titleType
}
export type governmeentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: stritType

}

export type CityType = {
    title: string
    houses: Array<housesType>
    governmeentBuildings: Array<governmeentBuildingsType>
    citizensNumber: number
}


