// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  User from 'App/Models/User'
import CardTransaction from 'App/Models/CardTransaction'
import CoinTransaction from 'App/Models/CoinTransaction'
import UserAmount from 'App/Models/UserAmount'
import UserAccount from 'App/Models/UserAccount'


export default class AdminsController {

    public async index({auth, response}){
        const user  = await auth.user
        await user.load('role')
        return response.send({message: user.role})
    }
    //all User
    public async allUser({response}){
        try {
            const user = await User.all()
            // await user?.load('wallet')
            return response.send({message: user})
        } catch (error) {
            return response.badRequest(error)
        }
    }

    //get single user and every relationship
    public async user({params, response}){
        try {
            const user = await User.findBy('id', params.id)
            await user?.load((loader) => {
                loader.load('coinTransaction')
                .load('transaction')
                .load('userAccounts')
                .load('wallet')
              })
              
            return response.send({message: user})
        } catch (error) {
            return response.badRequest(error)
        }
    }
    
    //get all card transactions
    public async getCardsTransactions({response}){
       try {
           const transactions = await CardTransaction.all()
            transactions.forEach(transaction => {
            transaction?.load((loader) => {
                    loader.load('card')
                    .load('status_name')
                    .load('user')
                  })
            });
           return response.send({message: transactions[0].user})
       } catch (error) {
           return response.badRequest(error)
       }
        
    }

    //get single card transaction
    public async getCard({params, response}){
        try {
            const transaction = await CardTransaction.findBy('id', params.id)
            await transaction?.load((loader) => {
                loader.load('card')
                .load('status_name')
                .load('user')
              })
            return response.send({message: transaction})
        } catch (error) {
            return response.badRequest(error)
        }
        
    }

    //change transaction status
    public async updateCardStatus({params, request, response}){
        try {
            const transaction = await CardTransaction.findByOrFail('id', params.id)
            transaction.status = request.input('status')
            transaction.save()
            return response.send({message: transaction})
        } catch (error) {
            console.log(error)
            return response.badRequest(error)
        }    
    }

    //confirm card transaction
    public async confirmCardTransaction({params, response}){
        try {
            const transaction = await CardTransaction.findByOrFail('id', params.id)
            transaction.completed = true
            transaction?.save()
            transaction.refresh()
            transaction?.load('status_name')
            // if (transaction?.status_name !== 'completed'){
            //     return response.send({message: 
            //         "Update the status of the transaction to completed to proceed with the deposit"})
            // }

            console.log()


            // const amount  = Number(transaction.amount)
            // const rate  = Number(transaction.rate)
            // let total = amount * rate

            // const wallet  = await UserAmount.findBy('user_id', transaction.user_id)
            // const last_record = Number(wallet?.amount)
            // const data = total + last_record

            //add funds to user account
            return response.send({message: transaction})
        } catch (error) {
            console.log(error)
            return response.badRequest(error)
        }
    }

    //get all coin transactions
    public async getCoinTransactions({response}){
        try {
            const transactions = await CoinTransaction.all()
             transactions.forEach(transaction => {
             transaction?.load((loader) => {
                     loader.load('coin')
                     .load('status_name')
                     .load('user')
                     
                   })
             });
            return response.send({message: transactions})
        } catch (error) {
            
        }
         
    }

    //get all user Amount
    public async userWallet({response}){
        try {
            const wallets = await UserAmount.all()
            wallets.forEach(wallet => {
                wallet?.load((loader) => {
                        loader.load('user') 
                    })
            });
            return response.send({message: wallets})

        } catch (error){
            return response.badRequest(error)
            
        }
    }

}

