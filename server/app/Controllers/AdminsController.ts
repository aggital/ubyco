// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  User from 'App/Models/User'
import CardTransaction from 'App/Models/CardTransaction'
import CoinTransaction from 'App/Models/CoinTransaction'
import UserAmount from 'App/Models/UserAmount'
import UserAccount from 'App/Models/UserAccount'
import Status from 'App/Models/Status'


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
            const status = await Status.find(transaction.status)
            const wallet = await UserAmount.findBy('user_id', transaction.user_id)

            if(status?.name !== 'completed'){
                return response.status(403).send({message: "Kind update the status of this transaction to completed" })
            }
            if(transaction?.completed === true){
                return response.status(403).send({message: "This transaction has been paid out" })
            }
            transaction.completed = true
            const pre = Number(wallet?.amount)         
            const value = Number(transaction.$attributes.rate * transaction.$attributes.amount + pre)
            await wallet
            .merge({ amount: value})
            .save()
            transaction?.save()
            
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

