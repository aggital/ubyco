import { DateTime } from 'luxon'
import { BaseModel, 
  column, 
  hasMany,
  HasMany
 } from '@ioc:Adonis/Lucid/Orm'
import CardType from 'App/Models/CardType'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

//card will have different type of
  @hasMany(() => CardType, {
    foreignKey: 'card_id'
  })
  
  public cardTypes: HasMany<typeof CardType>

}
