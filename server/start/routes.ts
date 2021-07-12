/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

// import { Router } from '@adonisjs/http-server/build/standalone'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', () => {
    return 'Hello world'
  });

//Authentication / General route
Route.post('register', 'AuthController.register')
Route.put('verify', 'AuthController.verify')
Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')
Route.put('forget', 'AuthController.forget')
// Route.get('/', 'AuthController.index').middleware('auth')
Route.get('/list-banks', 'UserController.listBanks')

// user route
Route.group(() => {
    Route.get('/', 'UserController.getProfile')
    Route.put('/profile', 'UserController.updateProfile')
    Route.get('/get-account', 'UserController.getAccount')
    Route.get('/get-account-name', 'UserController.getAccountName')
    Route.post('/add-account', 'UserController.addAccount')
    Route.get('/get-picture', 'UserController.getPicture')
    Route.get('/card', 'UserController.card')
    Route.get('/card-type', 'UserController.cardType')
    Route.post('/rate-calculator', 'UserController.rateCalculator')
    Route.post('/withdraw', 'UserController.withdraw')
}).prefix('/user').middleware('auth')
//giftcard
Route.group(() => {
    Route.post('/initiate-trade', 'GiftCardController.intiateTrade')
    Route.get('/trades', 'GiftCardController.getAllTrade')
    Route.get('/trade', 'GiftCardController.getTrade')
    Route.get('/trade-by/:id', 'GiftCardController.getTradeBy')
}).prefix('/giftcard').middleware('auth')

//bitcoin
Route.group(() => {
    Route.post('/initiate-trade', 'BitcoinController.intiateTrade')
    Route.get('/trade/:id', 'BitcoinController.getTrade')
    Route.get('/trades', 'BitcoinController.getAllTrade')
    Route.get('/trade-by/:id', 'BitcoinController.getTradeBy')
}).prefix('/coin').middleware('auth')

Route.group(() => {
    Route.get('/', 'AdminController.index')
    Route.get('/user', 'AdminController.allUser')
    Route.get('/user/:id', 'AdminController.user')
    Route.get('/card', 'AdminController.getCardsTransactions')
    Route.get('/card/:id', 'AdminController.getCard')
    Route.put('/card/:id', 'AdminController.updateCardStatus')
    Route.put('/confirm-card/:id', 'AdminController.confirmCardTransaction')
}).prefix('/admin').middleware(['auth', 'admin'])