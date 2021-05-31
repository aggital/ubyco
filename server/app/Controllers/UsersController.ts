// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Application from '@ioc:Adonis/Core/Application'

export default class UsersController {
    public async getProfile({response, auth}){
        const user = await auth.user;
        response.success({message: user})
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
        const user = await auth.user
        user.phone = payload.phone,
        user.email = payload.email,
        user.fullname = payload.fullname,
        user.username = payload.username
        user.save()
        response.success({message: user})
        } catch (error) {
            return response.badRequest({error})
        } 
    }

    public async uploadPicture({auth, request, response}){
        const data = schema.create({
            picture: schema.file({
              size: '2mb',
              extnames: ['jpg'],
            }),
          })
        
          try {
            //Validate file upload
            const payload = await request.validate({ schema: data })
            //rename file
            const fileName = `${cuid()}.${payload.picture.extname}`
            //Upload to tmp folder
            await payload.picture.move(Application.tmpPath('uploads/profiles'),{
                name: fileName,
            })
            //update picture name
            const user = await auth.user
            user.picture = fileName
            user.save()
            return response.status(200).send({message: user})
          } catch (error) {
            return response.badRequest({message: error.messages || "Something went wrong"})
          }
    }

    public async getPicture({auth, response}){
        const user = auth.user
        return response.status(200).attachment(Application.tmpPath('uploads/profile', user.picture)) 
    }
}
