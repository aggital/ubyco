import { DateTime } from 'luxon'
import { BaseModel, column,hasMany,HasMany  } from '@ioc:Adonis/Lucid/Orm'
import Coin from 'App/Models/Coin'
export default class CoinTransaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public coin_id: number

  @column()
  public amount: string

  @column()
  public total: string

  @column()
  public comment: string

  @column()
  public receipt: string

  @column()
  public completed: boolean

  @column()
  public status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Coin, {
    foreignKey: 'coin_id'
  })
  public coinTransaction: HasMany<typeof Coin>

}
