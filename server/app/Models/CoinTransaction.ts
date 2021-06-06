import { DateTime } from 'luxon'
import { 
    BaseModel, 
    column,
    belongsTo,
    BelongsTo  
} from '@ioc:Adonis/Lucid/Orm'
import Coin from 'App/Models/Coin'
import Status from 'App/Models/Status'
import User from 'App/Models/User'




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
  public comments: string

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

  @belongsTo(()=>Coin, {
    foreignKey: 'coin_id'
  })
  public coin: BelongsTo<typeof Coin>

  @belongsTo(()=>Status, {
    foreignKey: 'status'
  })
  public status_name: BelongsTo<typeof Status>

  @belongsTo(() => User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>


}
