import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Inboxes extends BaseSchema {
  protected tableName = 'inboxes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('sender_id').references('users.id')
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
