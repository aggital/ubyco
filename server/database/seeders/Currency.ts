import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Currency from 'App/Models/Currency'


export default class CurrencySeeder extends BaseSeeder {
  public async run () {
    await Currency.createMany([
      {
        name:  'naira',
        symbol: '₦'
      },
      {
        name:  'dollar',
        symbol: '$'
      }
    ])
  }
}
