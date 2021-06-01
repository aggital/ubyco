// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CardType from 'App/Models/CardType'

export default class CardsController {
    public async getRate(response:any){
        const cards = CardType.all()
        return response.success({message: cards})
    }
}
