import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserInboxes extends BaseSchema {
  protected tableName = 'user_inboxes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('text')
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
