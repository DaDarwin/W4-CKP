




export class Weather{

    constructor(data){
        this.city = data.name
        this.main = data.weather[0].main
        this.description = data.weather[0].description

        this.temp = this.getCelsius(data.main.temp)
        this.feels = this.getCelsius(data.main.feels_like)
        this.humidity = data.main.humidity
            
    }
        

    getCelsius(kelvin){
        return Math.round(kelvin - 273.15)
    }
    
    static getFahrenheit(celsius){
        return Math.round(celsius * (9/5) + 32)
    }
}