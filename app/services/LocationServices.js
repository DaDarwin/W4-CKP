import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"





class LocationServices{

    constructor(){
        setInterval(this.getTime, 15000)
    }
    
    getTime(){
        AppState.time = `${AppState.pref.time12 = true? (new Date().getHours()>12? new Date().getHours() - 12 : new Date().getHours() ) : new Date().getHours()}:${(new Date().getMinutes()<10)? '0'+ String(new Date().getMinutes()) : new Date().getMinutes()}`
        // console.log('time', AppState.time)
    }

    async getWeather(){
        const response = await api.get('api/weather')
        AppState.weather = new Weather(response.data)
        console.log('weather',AppState.weather)
    }

    changeTemp(){
        let temp = AppState.pref.tempFah
        if(temp){
            temp = false
            AppState.pref.tempFah = temp
        }
        else {
            temp = true
            AppState.pref.tempFah = temp
        }
    }

    timeMethod(){
        if(AppState.pref.time12){
            AppState.pref.time12 = false
        }
        else AppState.pref.time12 = true
        
    }

}




export const locationServices = new LocationServices()