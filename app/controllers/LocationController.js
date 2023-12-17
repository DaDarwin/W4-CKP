import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { locationServices } from "../services/LocationServices.js";
import { setText } from "../utils/Writer.js";


function _drawTime(){
    setText('time', AppState.time)
}

function _drawWeather(){
    // const weather = AppState.weather
    // setText('city', weather.name)
    // setText('main', weather.main)
    // setText('humidity', weather.humidity)
    // if(AppState.pref.tempFah){
    //     setText('temp', `${Weather.getFahrenheit(weather.temp)}C`)
    //     setText('feels', `${Weather.getFahrenheit(weather.feels)}C`)
    // }
    // else{
    //     setText('temp', `${weather.temp}C`)
    //     setText('feels', `${weather.feels}C`)
    // }
}


export class LocationController{


    constructor(){
        setText('time', `${new Date().getHours()}:${(new Date().getMinutes()<10)? '0'+ String(new Date().getMinutes()) : new Date().getMinutes()}`)
        AppState.on('user', this.getWeather)
        this.getWeather()
        AppState.on('time', _drawTime)
        AppState.on('weather', _drawWeather)
        AppState.on('pref.tempFah', _drawWeather)
    }

    async getWeather(){
        try {
            await locationServices.getWeather()
        } catch (error) {
            console.error(error)
        }
    }
}
