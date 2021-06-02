// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Application from '@ioc:Adonis/Core/Application'
import * as Helper from '../common'
import Card from 'App/Models/Card'
// import { Response } from '@adonisjs/http-server/build/standalone';

export default class UsersController {
    public async getProfile({response, auth}){
        try {
            const user = await auth.user;
           return response.send({message: user})
        } catch (error) {
            console.log(error)
            return response.badRequest({error})
        }  
    }

    public async updateProfile({request, response, auth}){
        const data = schema.create({
            fullname: schema.string({}, [
                rules.required()
            ]),
            phone: schema.string({ trim: true }, [
                 rules.required(),

            ]),
            email: schema.string({ escape: true }, [
                rules.required(),
                rules.email()
           ]),
           username: schema.string({ trim: true }, [
            rules.required(),
            ]),
            picture: schema.file({
                size: '2mb',
                extnames: ['jpg'],
              }),
        });

        try {
                const payload = await request.validate({
                schema: data,
                    messages: {
                    required: 'The {{ field }} is required',
                    'email.unique': 'email already exist',
                    'phone.unique': 'phone number already exist',
                    email: 'Invalid email input'
                    }
                })
                const fileName = `${cuid()}.${payload.picture.extname}`
                //Upload to tmp folder
                await payload.picture.move(Application.tmpPath('uploads/profiles'),{
                    name: fileName,
                })

                const user = await auth.user
                user.phone = payload.phone,
                user.email = payload.email,
                user.fullname = payload.fullname,
                user.username = payload.username,
                user.picture = fileName

                let name = payload.fullname.split(' ')
                //update paystack user detail to match on app
               await Helper.paystack.updateCustomer({
                    customer_id: user.customer_id,
                    first_name: name[0],
                    last_name: name[1],
                    email: payload.email,
                    phone: payload.phone
                  })
                
                user.save()
                return response.send({message: user}) 
            } catch (error) {
                return response.badRequest({error})
                
        } 
    }

    public async getPicture({auth, response}){
        try{
            const user = auth.user
            return response.status(200).attachment(Application.tmpPath('uploads/profiles', user.picture)) 
        } catch (error) {
            return response.badRequest({error})
        }
    }

    public async getAccount({auth, response}){
         try {
            const user= await auth.user
            const account =  await user?.load('userAccounts')
            console.log(account)
            return response.send({message: account})
         } catch (error) {
             console.log(error)
             return response.badRequest(error)
         }
       
    }

    public async getAccountName({request, response}){
        const data = schema.create({
            bank_code: schema.string({}, [
                rules.required()
            ]),
            account_number: schema.string({ trim: true }, [
                 rules.required(),

            ])
        });

        try {
            const payload = await request.validate({
                schema: data,
                    messages: {
                    required: 'The {{ field }} is required',
                    }
            })
           const name = await Helper.paystack.resolveAccountNumber({
                account_number: payload.account_number,
                bank_code: payload.bank_code,
            })
          return response.send({message: name.body.data.account_name})
        } catch (error) {
            return response.badRequest({message:error})
        }
    }

    public async listBanks({response}){
        try {
            const bank  = await Helper.paystack.listBanks({
                country:'nigeria'
            })
            return response.send({message: bank.body.data})
        } catch (error) {
            console.log(error)
            return response.badRequest({error})
        }
    }

    public async card({response}){
        try {
            const card = await Card.all()
            return response.send({message: card})
        } catch (error) {
            return response.badRequest(error)
        }
        
    }

    public async cardType({request,response}){
        const data = schema.create({
            id: schema.number([
                rules.required()
            ])
        });

        try {
            const payload = await request.validate({
                schema: data,
                    messages: {
                    required: 'The {{ field }} is required',
                    }
            })
            const card : any= await Card.findBy('id', payload.id) 
            await card.load('cardTypes')
            return response.send({message: card?.cardTypes})
        } catch (error) {
            console.log(error)
            return response.badRequest(error)
        }
    }


}
