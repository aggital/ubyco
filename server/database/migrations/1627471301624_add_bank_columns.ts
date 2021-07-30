import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserWithdrawals extends BaseSchema {
  protected tableName = 'user_withdrawals'

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
