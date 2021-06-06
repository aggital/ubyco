import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Coin from 'App/Models/Coin'

export default class CoinSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Coin.createMany([
      {
        name: 'Btc',
        rate: '450'
      },
      {
        name: 'Skiril',
        rate: '450'
      },
      {
        name: 'dodge coin',
        rate: '150'
      },
      {
        name: 'etherum',
        rate: '450'
      },
    ])
  }
}
