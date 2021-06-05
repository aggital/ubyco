// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
// import CoinTransaction from 'App/Models/CoinTransaction'
import Coin from 'App/Models/Coin'

export default class BitcoinsController {
    public async intiateTrade({request, response, auth}){
        const data = schema.create({
            amount: schema.string({}, [
                rules.required(),
           ]),
           comment:schema.string({},[
               rules.required()
           ]),
           receipt: schema.file({
               size: '2mb',
               extnames: ['jpg','png']
           })
        });
        
        const payload = await request.validate({
            schema: data,
                messages: {
                required: 'The {{ field }} is required',
                }
        })

        try {
            const user = await auth.user
            const coin = await Coin.findBy('id', request.coin_id)
            console.log(coin);
        //     const fileName = `${cuid()}.${payload.picture.extname}`
        //     await payload.receipt.move(Application.tmpPath('uploads/coins'), {
        //         name: fileName
        //     })
        //     const trasaction = await user.related('coinTransaction').create({
        //      coin_id : payload.coin_id,
        //      comment : payload.comment,
        //      amount : payload.amount,
        //      receipt : fileName,
        //      total : 
        // })
              
            

            return response.send({message: coin})
        } catch (error) {
            return response.badRequest(error)  
        }
    }

    public async getTrade({response, auth}){
        try {
            const user = auth.user
            await user.load('transaction')
            return response.send({message: user.transaction})
        } catch (error) {
            console.log(error)
            return response.badRequest(error)
        }
    }

    public async getTradeBy({params, response, auth}){
        try {
            const user = auth.user
            const status_id =  params.id
            await user.load('transaction',(transactionQuery) => {
                transactionQuery.where('status', status_id)
              })
            return response.send({message: user.transaction})
        } catch (error) {
            console.log(error)
            return response.badRequest(error)
        }
    }
}
