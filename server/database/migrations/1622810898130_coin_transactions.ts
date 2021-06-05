import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CoinTransactions extends BaseSchema {
  protected tableName = 'coin_transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.integer('coin_id').references('coins.id')
      table.string('amount').notNullable()
      table.string('total').notNullable
      table.text('comments')
      table.string('receipt')
      table.boolean('completed').defaultTo(false)
      table.integer('status').references('statuses.id').defaultTo(1)
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
