import createDataContext from './createDataContext';
import Server from '../api/Server';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return [...state, { login: 'i login' }];
        case 'signup':
            return [...state, { signup: 'i sign up' }];
        case 'verify':
            return [...state, { verify: 'i verify' }];
        case 'reset':
            return [...state, { reset: 'i reset' }];
        default:
            return state;
    }
}

const login  =  dispatch => {
    return() => {
        dispatch({type: 'login'});
    }
};

const signup = dispatch => {
    return() => {
        dispatch({type: 'signup'});
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


export const { Context, Provider } = createDataContext(authReducer, {checkToken, login, signup, verify, resetPassword}, {})