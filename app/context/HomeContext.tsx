import createDataContext from './createDataContext';
import Server from '../api/Server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
// import FormData from 'form-data';
import mime from "mime";


const homeReducer = (state: any, action: { type: any; payload: any; }) => {
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

const clearMessage = (dispatch: (arg0: { type: string; }) => void) => () => {
    dispatch({ type: 'clear_error_message' })
}


const getUser = (dispatch: (arg0: { type: string; payload: any; }) => void) => {
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


const getCard = (dispatch: (arg0: { type: string; payload: any; }) => void) => {
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

const cardType = (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    return async (value: any, callback: (arg0: any) => void) => {
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
            //console.log(response.data)
            callback(response.data.message)

        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }

}

const coinType = (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    return async (callback: (arg0: any) => void) => {
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

const initiateCardTrade = (dispatch: any) => {
    return async (id: any, amount: any, comment: any, image: any, rate: any, callback: any) => {
        try {
            const token = await AsyncStorage.getItem('token')

            let data = {
                card_type_id: id,
                amount: amount,
                comment: comment,
                rate: rate
            }
            const formData = new FormData();
            formData.append('data', JSON.stringify(data));

            const option = { content: formData }

            const response = await Server.post('/giftcard/initiate-trade',
                { data: formData },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        // 'content-type': `multipart/form-data; boundary=--------something awesome`,
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

const initiateCoinTrade = (dispatch: any) => {
    return async (id: string | Blob, amount: string | Blob, comment: string | Blob, image: string | any[], rate: string | Blob, callback: any) => {
        try {
            const token = await AsyncStorage.getItem('token')
            let formdata = new FormData()
            formdata.append('coin_id', id)
            formdata.append('rate', rate)
            formdata.append('amount', amount)
            formdata.append('comment', comment)
            for (let i = 0; i < image.length; i++) {
                formdata.append("receipt[]", {
                    name: image[i].name,
                    uri: Platform.OS === 'ios' ? image[i].uri.replace('file://', '') : image[i].uri,
                    type: 'jpeg'
                })
            }

            for (let [key, value] of formdata.entries()) {
                console.log(`${key}: ${value}`);
            }
        
            const response = await Server.post('/coin/initiate-trade',
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
            console.log(error.response.data)
            //dispatch({ type: 'add_error', payload: "something went wrong, try again" })
        }
    }
}

const fetchBank = (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    return async (callback: (arg0: any) => void) => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await Server.get(`/list-banks`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            //  console.log(response.data.message)
            callback(response.data.message)
        }
        catch (err) {
            dispatch({ type: 'add_error', payload: "Network error" })
        }
    }
}

const getAccount = (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    return async (callback: (arg0: any) => void) => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await Server.get(`/user/get-account`, {
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


const bankAccountName = (dispatch: any) => {
    return async (code: any, accountNumber: any, callback: (arg0: any) => void) => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await Server.get(`/user/get-account-name`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'account_number': `${accountNumber}`,
                    'bank_code': `${code}`
                }
            });
            //console.log(response.data.message)
            callback(response.data.message)
        } catch (error) {
            console.log(error, 'i worked too')
        }
        // try {

        // }
        // catch(err) {
        //     console.log('err.response')
        //     dispatch({ type: 'add_error', payload: "Network error" })
        // }
    }

}

const addAccount = (dispatch: any) => {
    return async (code: any, accountName: any, accountNumber: any, bankName: any, callback: (arg0: string) => void) => {
        try {
            console.log(code, accountNumber, accountName, bankName) 
            const token = await AsyncStorage.getItem('token')
            const response = await Server.post(`/user/add-account/`,
                {
                   'bank_code': code,
                    'account_number': accountNumber,
                    'account_name': accountName,
                    'bank': bankName
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            callback('Account added successfully')
        } catch (error) {
            // console.log(error.response)
            callback('Something went wrong')
            // dispatch({ type: 'add_error', payload: error.response.data.message})
        }
    }
}

export const { Context, Provider } = createDataContext(homeReducer,
    {
        clearMessage, getUser, getCard,
        cardType, coinType, initiateCardTrade,
        initiateCoinTrade, fetchBank, bankAccountName,
        addAccount, getAccount,
    }, { errorMessage: '', user: '', message: '', card: '' })