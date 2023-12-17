import { AppState } from "../AppState.js"
import { BgImage } from "../models/BgImage.js"
import { api } from "./AxiosService.js"
import { Quote } from '../models/Quote.js';


class InspireService{

    async getImage(){
        const Response = await api.get('api/images')
        AppState.image = new BgImage(Response.data)
        // console.log('image',AppState.image)
    }

    async getQuote(){
        const Response = await api.get('api/quotes')
        AppState.quote = new Quote(Response.data)
        // console.log('quote',AppState.quote, Response.data)
    }
}


export const inspireService = new InspireService
