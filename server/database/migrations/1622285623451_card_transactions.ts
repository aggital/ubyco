import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CardTransactions extends BaseSchema {
  protected tableName = 'card_transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.integer('card_type_id').references('card_types.id')
      table.string('amount').notNullable()
      table.text('comments')
      table.json('cards')
      table.boolean('completed').defaultTo(false)
      table.integer('status').references('statuses.id').defaultTo(1)
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
