import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"





class LocationServices{

    constructor(){
        let time = setInterval(this.getTime, 15000)
    }


    async getWeather(){
        const response = await api.get('api/weather')
        AppState.weather = new Weather(response.data)
        console.log('weather',AppState.weather)
    }

    getTime(){
        AppState.time = `${new Date().getHours()}:${(new Date().getMinutes()<10)?'0'+ String(new Date().getMinutes()):new Date().getMinutes()}`
        console.log('time', AppState.time)
    }
}



export const locationServices = new LocationServices()