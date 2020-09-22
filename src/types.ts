
export interface IApi {
    key: string,
    base: string
}

export interface IWeather {
    location: string,
    country: string,
    temp: number,
    weather: string,
    icon:string
}