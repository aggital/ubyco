import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('role_id').references('roles.id').defaultTo(1)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
