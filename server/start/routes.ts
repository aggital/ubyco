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

//Authentication / General route
Route.post('register', 'AuthController.register')
Route.put('verify', 'AuthController.verify')
Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')
Route.put('forget', 'AuthController.forget')
Route.get('/', 'AuthController.index').middleware('auth')

Route.get('/list-banks', 'UsersController.listBanks')

// user route
Route.group(() => {
    Route.get('/profile', 'UsersController.getProfile')
    Route.put('/profile', 'UsersController.updateProfile')
    Route.get('/get-account', 'UsersController.getAccount')
    Route.get('/get-account-name', 'UsersController.getAccountName')
    Route.post('/add-account', 'UsersController.addAccount')
    Route.get('/get-picture', 'UsersController.getPicture')
    Route.get('/card', 'UsersController.card')
    Route.get('/card-type', 'UsersController.cardType')
    Route.post('/rate-calculator', 'UsersController.rateCalculator')
}).prefix('/user').middleware('auth')

Route.group(() => {
    Route.post('/initiate-trade', 'GiftCardsController.intiateTrade')
    Route.get('/trade', 'GiftCardsController.getTrade')
}).prefix('/giftcard').middleware('auth')

//giftcard
// Route.group(() => {
//     Route.get('/rate', 'CardController.getRate')
// }).prefix('/giftcard').middleware('auth')