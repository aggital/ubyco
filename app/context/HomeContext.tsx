import createDataContext from './createDataContext';
import Server from '../api/Server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import mime from "mime";


const homeReducer = (state, action) => {
    switch (action.type) {
        case 'get_user':
            return { ...state, user: action.payload };
        case 'get_card':
            return { ...state, card: action.payload };
        case 'card_type':
            return { ...state, card_type: action.payload }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
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
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'multipart/form-data'
                }
            });
            dispatch({ type: 'get_user', payload: response.data.message })

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
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch({ type: 'get_card', payload: response.data.message })

        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }
};

const cardType = dispatch => {
    return async (value, callback) => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await Server.get(`/user/card-type`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'name': `${value}`
                }
            });
            console.log(response.data)
            callback(response.data.message)

        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }

}

const coinType = dispatch => {
    return async (callback) => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await Server.get(`/user/coin`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            callback(response.data.message)

        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }

}

const initiateCardTrade = dispatch => {
    // console.log('let work')
    return async (id, amount, comment, image, rate, callback) => {
        try {
            const token = await AsyncStorage.getItem('token')
            let formdata = new FormData()
           
           

            formdata.append('card_type_id', id)
            formdata.append('rate', rate)
            formdata.append('amount', amount)
            formdata.append('comment', comment)
            for(let i =0; i <image.length; i++ ){
                formdata.append("image[]", {
                    name: image[i].name,
                    uri: Platform.OS === 'ios' ? image[i].uri.replace('file://', '') : image[i].uri,
                    type: 'jpeg'
                })
            }
            const response = await Server.post('/giftcard/initiate-trade',
                { data: formdata },
                // {mode: 'cors'},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'user-agent': 'Thunder Client (https://www.thunderclient.io)',
                        'content-type': `multipart/form-data; boundary=${formdata._boundary}`,
                    },
                }
            );
            console.log(response)

        } catch (error) {
            console.log(error.response)
            //dispatch({ type: 'add_error', payload: "something went wrong, try again" })
        }
    }
}


export const { Context, Provider } = createDataContext(homeReducer,
    {
        clearMessage, getUser, getCard, cardType, coinType, initiateCardTrade
    }, { errorMessage: '', user: '', message: '', card: '' })