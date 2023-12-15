import { AppState } from "../AppState.js";
import { locationServices } from "../services/LocationServices.js";





export class LocationController{


    constructor(){
        AppState.on('user', this.getWeather)
        this.getWeather()
    }

    async getWeather(){
        try {
            await locationServices.getWeather()
        } catch (error) {
            console.error(error)
        }
    }
}
