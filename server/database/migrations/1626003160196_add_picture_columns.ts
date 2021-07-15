import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cards extends BaseSchema {
  protected tableName = 'cards'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('image')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('image')
    })
  }
}
