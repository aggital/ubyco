import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { 
  BaseModel, 
  column,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'

export default class CardTransaction extends BaseModel {

  public static table = 'card_transactions'

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public card_type_id: number

  @column()
  public amount: string

  @column()
  public comments: string

  @column()
  public cards: object

  @column()
  public status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>
}
