// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  User from 'App/Models/User'
import CardTransaction from 'App/Models/CardTransaction'
import CoinTransaction from 'App/Models/CoinTransaction'
import UserAmount from 'App/Models/UserAmount'


export default class AdminsController {
    //all User
    public async AllUser({response}){
        try {
            const user = await User.all()
            return response.send({message: user})
        } catch (error) {
            return response.badRequest(error)
        }
    }

    //get single user and every relationship
    public async User({params, response}){
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
    public async GetCardsTransactions({response}){
       try {
           const cards = await CardTransaction.all()
            cards.forEach(card => {
            card?.load((loader) => {
                    loader.load('card')
                    .load('status_name')
                    .load('user')
                    
                  })
            });
           return response.send({message: cards})
       } catch (error) {
           
       }
        
    }

    //get all card transcation by status
    

    //get all coin transactions
    public async GetCoinTransactions({response}){
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
    public async UserWallet({response}){
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

