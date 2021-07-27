import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserAccounts extends BaseSchema {
  protected tableName = 'user_accounts'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('bank')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('bank')
    })
  }
}
