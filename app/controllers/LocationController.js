import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { locationServices } from "../services/LocationServices.js";
import { setText } from "../utils/Writer.js";


function _drawTime(){
    setText('time', AppState.time)
}

function _drawWeather(){
    const weather = AppState.weather
    setText('city', weather.city)
    setText('weather', weather.main)
    setText('humidity', `Humidity: ${weather.humidity}°`)
    if(AppState.pref.tempFah){
        setText('temp', `Temp: ${Weather.getFahrenheit(weather.temp)}F°`)
        setText('feels', `Feels Like: ${Weather.getFahrenheit(weather.feels)}F°`)
    }
    else{
        setText('temp', `Temp: ${weather.temp}C°`)
        setText('feels', `Feels Like:${weather.feels}C°`)
    }
}


export class LocationController{


    constructor(){
        setText('time', `${new Date().getHours()}:${(new Date().getMinutes()<10)? '0'+ String(new Date().getMinutes()) : new Date().getMinutes()}`)
        AppState.on('user', this.getWeather)
        this.getWeather()
        AppState.on('time', _drawTime)
        AppState.on('weather', _drawWeather)
        AppState.on('pref', _drawWeather)
    }

    async getWeather(){
        try {
            await locationServices.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    changeTemp(){
        locationServices.changeTemp()
    }

    timeMethod(){
        locationServices.timeMethod()
        
    }
}
