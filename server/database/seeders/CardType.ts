import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CardType from 'App/Models/CardType'

export default class CardTypeSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await CardType.createMany([
      {
        card_id: 1,
        name: 'Amazon cash Receipt',
        rate: '350'
      },
      {
        card_id: 1,
        name: 'Amazon No Receipt',
        rate: '250'
      },
      {
        card_id: 2,
        name: 'Itune 100 - 500',
        rate: '150'
      },
      {
        card_id: 2,
        name: 'Itune 600 - 1000',
        rate: '450'
      },
      {
        card_id: 3,
        name: 'Ebay 100 - 200',
        rate: '150'
      },
      {
        card_id: 3,
        name: 'Ebay 600 - 1000',
        rate: '450'
      },
    ])

  }
}
