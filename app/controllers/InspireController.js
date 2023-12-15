import { AppState } from '../AppState.js';
import { inspireService } from '../services/InspireService.js';




export class InspireController{

    constructor(){
        AppState.on('user', this.getInspire)
        this.getInspire()
        // AppState.on('image', _drawImage)
        // AppState.on('quote' _drawQuote)

    }
    getInspire(){
        this.getImage()
        this.getQuote()
    }

    async getImage(){
        try {
            await inspireService.getImage()    
        } catch (error) {
            console.error(error)
        }
    }

    async getQuote(){
        try {
            await inspireService.getQuote()    
        } catch (error) {
            console.error(error)
        }
    }
}
