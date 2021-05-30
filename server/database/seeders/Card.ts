import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Card from 'App/Models/Card'
export default class CardSeeder extends BaseSeeder {
  public async run () {
      await Card.createMany([
        {
          name: 'Amazon'
        },
        {
          name: 'Itunes'
        },
        {
          name: 'Ebay'
        }
        
      ])
  
  }
}
