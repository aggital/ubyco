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

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
//Authentication
Route.post('register', 'AuthController.register')
Route.put('verify', 'AuthController.verify')
Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')
Route.put('forget', 'AuthController.forget')

// user route
Route.group(() => {
    Route.get('/profile', 'UsersController.getProfile')
    Route.put('/profile', 'UsersController.updateProfile')
    Route.put('/upload_picture', 'UsersController.uploadPicture')
    Route.put('/add_account', 'UsersController.addAccount')
    Route.get('/get_picture', 'UsersController.getPicture')
}).prefix('/user').middleware('auth')

//giftcard
Route.group(() => {
    Route.get('/rate', 'CardController.getRate')
}).prefix('/giftcard').middleware('auth')