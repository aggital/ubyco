import createDataContext from './createDataContext';
import Server from '../api/Server';
import AsyncStorage from '@react-native-async-storage/async-storage';


const homeReducer = (state, action) => {
    switch (action.type) {
        case 'get_user':
            return { ...state, user: action.payload };
        case 'get_card':
                return { ...state, card: action.payload };
        case 'add_error':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const clearMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}


const getUser = dispatch => {
    return async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            // console.log(token)
            const response = await Server.get('/user', {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
              });
            dispatch({ type: 'get_user', payload: response.data.message})
           
        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }
};


const getCard = dispatch => {
    return async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            // console.log(token)
            const response = await Server.get('/user/card', {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
              });
            dispatch({ type: 'get_card', payload: response.data.message})
           
        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }
};





export const { Context, Provider } = createDataContext(homeReducer,
    {
         clearMessage, getUser,getCard
    }, { errorMessage: '', user:'', message: '', card:'' })