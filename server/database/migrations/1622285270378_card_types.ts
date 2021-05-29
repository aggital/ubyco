import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CardTypes extends BaseSchema {
  protected tableName = 'card_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('card_id').references('cards.id')
      table.string('name')
      table.string('rate')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
