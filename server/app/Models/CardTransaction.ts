import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Status from 'App/Models/Status'
import { 
  BaseModel, 
  column,
  belongsTo,
  BelongsTo,
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm'
import CardType from './CardType'
import UserAccount from './UserAccount'


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
  public rate: string

  @column()
  public cards: object

  @column()
  public status: number

  @column()
  public completed: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>CardType, {
    foreignKey: 'card_type_id'
  })
  public card: BelongsTo<typeof CardType>

  @belongsTo(()=>Status, {
    foreignKey: 'status'
  })
  public status_name: BelongsTo<typeof Status>

  @belongsTo(() => User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @hasOne(() => UserAccount, {
    foreignKey: 'user_id'
  })
  public wallet: HasOne<typeof UserAccount>

}
