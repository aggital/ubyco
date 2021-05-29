import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserAccounts extends BaseSchema {
  protected tableName = 'user_accounts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.integer('bank_code')
      table.string('account_number')
      table.string('account_name')
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
