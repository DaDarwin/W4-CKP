




export class Weather{

    constructor(data){
        this.city = data.name
        this.main = data.weather[0].main
        this.description = data.weather[0].description

        this.temp = this.getCelsius(data.main.temp)
        this.feels = this.getCelsius(data.main.feels_like)
            
    }
        

    getCelsius(kelvin){
        return (kelvin - 273.15)
    }
    
    static getFahrenheit(celsius){
        celsius * (9/5) + 32
    }
}