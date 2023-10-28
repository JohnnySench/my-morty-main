interface LocationItem {
    name: string,
    url: string
}
interface OriginItem {
    name: string,
    url: string
}
export default interface CharactersItemData {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: LocationItem,
    name: string,
    origin: OriginItem,
    species: string,
    status: string,
    type: string,
    url: string
}
interface InfoItemData {
    count: number,
    next: null | string,
    pages: number,
    prev: null | string
}

export default interface CharactersData {
    info: InfoItemData,
    results: CharactersItemData[]
}