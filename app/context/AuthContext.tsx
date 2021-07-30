import createDataContext from './createDataContext';
import Server from '../api/Server';
import AsyncStorage from '@react-native-async-storage/async-storage';


const authReducer =(state:object, action:any) => {
    switch (action.type) {
        case 'login':
            return { ...state, token: action.payload };
        case 'verify':
            return { ...state, token: action.payload };
        case 'reset':
            return { ...state, reset: 'i reset' };
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
}


const clearMessage = (dispatch: (arg0: { type: string; }) => void) => () => {
    dispatch({ type: 'clear_error_message' })
}


const login = (dispatch: (arg0: { type: string; payload: any; }) => void) => async(email:string, password:string, callback:() => void) => {
        try {
            const response = await Server.post('/login',
                { email, password },
                { timeout: 10000, timeoutErrorMessage: 'something went wrong' });
            await AsyncStorage.setItem('token', response.data.message.token)
            dispatch({ type: 'login', payload: response.data.message.token })
            callback();
        }
        catch (err) {
            const message = err.response.data
            const network = err.response.status
            console.log(err.response)
            if (Object.keys(message).length <= 0 || undefined) {
                dispatch({ type: 'add_error', payload: 'Invalid user details' })
            } else if (network == 400 && Object.keys(message).length > 0) {
                let errors = message.messages.errors
                const uniques = errors.map(
                    (obj: { field: any; }) => {
                        return obj.field
                    }
                )
                let obj = {}
                for (var i = 0; i < uniques.length; i++) {
                    obj[uniques[i]] = errors[i].message;
                    dispatch({ type: 'add_error', payload: obj })
                }
            } else if (network == 401) {
                dispatch({ type: 'add_error', payload: err.response.data.message })
            } else {
                dispatch({ type: 'add_error', payload: 'something went wrong' })
            }

        }
};

const signup = (dispatch: (arg0: { type: string; payload: string | {}; }) => void) => async (fullname: any, phone: any, email: any, password: any, callback: () => void) => {
        try {
            const response = await Server.post('/register', { fullname, phone, email, password });
            callback();
        } catch (err) {
            const message = err.response.data
            console.log(message)
            const network = err.response.status
            if (Object.keys(message).length <= 0) {
                dispatch({ type: 'add_error', payload: 'User already exist' })
            } else if (network == 400 && Object.keys(message).length > 0) {
                let errors = message.errors
                const uniques = errors.map(
                    (obj: { field: any; }) => {
                        return obj.field
                    }
                )
                let obj = {}
                for (var i = 0; i < uniques.length; i++) {
                    obj[uniques[i]] = errors[i].message;
                    dispatch({ type: 'add_error', payload: obj });
                }
            }else {
                 dispatch({ type: 'add_error', payload: 'something went wrong' })
            }
        }
    };

const verify = (dispatch: (arg0: { type: string; payload: any; }) => void) => async (token: any, callback: () => void) => {
        try {
            const response = await Server.put('/verify', { verification_code: token });
            console.log(response)
            await AsyncStorage.setItem('token', response.data.message.token)
            dispatch({ type: 'login', payload: response.data.message.token })
            callback();
        } catch (err) {            
                dispatch({ type: 'add_error', payload: 'something went wrong' })
            }
};

const Logout = (dispatch: any) => {
    return async (callback: () => void) => {
        await AsyncStorage.removeItem('token')
        callback()
    }
};

const checkToken = (dispatch: (arg0: { type: string; }) => any) => {
    return async() => {
        const token = await AsyncStorage.getItem('token')
        token ?  dispatch({ type: 'login' }) : null ;
    }
};


export const { Context, Provider } = createDataContext(authReducer,
    {
        checkToken, login, signup, verify, Logout, clearMessage
    }, { errorMessage: '', token: null, message: '' })