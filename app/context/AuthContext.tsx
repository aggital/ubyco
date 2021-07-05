import createDataContext from './createDataContext';
import Server from '../api/Server';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return [...state, token: action.payload];
        case 'signup':
            return [...state, ];
        case 'verify':
            return [...state, { verify: 'i verify' }];
        case 'reset':
            return [...state, { reset: 'i reset' }];
        case 'add_error':
            return [...state, errorMessage: action.payload]
        default:
            return state;
    }
}

const login  =  dispatch => {
    return async ({email, password}) => {
        try {
            const response = await Server.post('/login', {email, password});
        } catch (error) {
            type
        }
    }
};

const signup = dispatch => {
    return async ({email, password, fullname, phone, callback}) => {
        try {
           const response = await Server.post('/register', {fullname, phone, email, password});
           callback();
        } catch (err) {
            dispatch (type: 'add_error', payload: err.response)
        }
    }
};

const verify = dispatch => {
    return() => {
        dispatch({type: 'verify'});
    }
};

const resetPassword = dispatch => {
    return() => {
        dispatch({type: 'reset'});
    }
};

const checkToken = dispatch => {
    return() => {
        dispatch({type: 'token'});
    }
};


export const { Context, Provider } = createDataContext(authReducer, {checkToken, login, signup, verify, resetPassword}, {errorMessage:'', token: null})