import { Exception } from '@adonisjs/core/build/standalone'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new NotfoundException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
const message = 'The item is in an status where modifications are disallowed'
const status = 404
const code = 'E_NOT_FOUND'

export default class NotfoundException extends Exception {
    constructor () {
        super(message, status, code)
      }
}
