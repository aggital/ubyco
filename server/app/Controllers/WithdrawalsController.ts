// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WithdrawalsController {
    public async initiateWithdrawal({request, response, auth}){
        const user  = auth.user;
        const amount = request.body.amount
        
    }
}
