import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle ({auth,response}: HttpContextContract, next: () => Promise<void>) {
    const user = await auth.user
    await user?.load('role')
      if(user?.role.$attributes.name !== 'admin'){
        return response.status(404).send({message: 'Page Not found'})
    }
    await next()
  }
}
