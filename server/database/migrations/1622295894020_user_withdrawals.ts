import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserWithdrawals extends BaseSchema {
  protected tableName = 'user_withdrawals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.string('amount')
      table.string('receipt')
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
