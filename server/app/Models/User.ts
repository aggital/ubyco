import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm'
import UserAccount from 'App/Models/UserAccount'
import UserAmount from 'App/Models/UserAmount'
import CardTransaction from 'App/Models/CardTransaction'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public fullname:string

  @column()
  public phone:string

  @column()
  public verification_code:string

  @column()
  public is_verified:boolean

  @column()
  public picture:string

  @column()
  public rememberMeToken?: string

  @column()
  public customer_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => UserAccount , {
    foreignKey: 'user_id'
  })
  public userAccounts: HasOne<typeof UserAccount>

  @hasOne(()=>UserAmount, {
    foreignKey: 'user_id'
  })
  public wallet: HasOne<typeof UserAmount>

  @hasMany(()=>CardTransaction, {
    foreignKey: 'user_id'
  })
  public transaction: HasMany<typeof CardTransaction>

}
