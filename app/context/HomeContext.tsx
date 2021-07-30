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
            const response = await Server.get('/user', {
                headers: {
                    'Authorization': `Bearer ${token}`,
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
            let formData = new FormData();

            for (let i = 0; i < image.length; i++) {
                formData.append(`card[${i}]`, { uri: image[i].url, name: image[i].name, type: image[i].type })
            }
            formData.append("card_type_id", id);
            formData.append("rate", rate);
            formData.append("amount", amount);
            formData.append("comment", comment)

            const response = await fetch("https://bda418c1f2e2.ngrok.io/giftcard/initiate-trade", {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'multipart/form-data',
                },
            });
            callback()
        }

        catch (error) {
            dispatch({ type: 'add_error', payload: "something went wrong, try again" })
        }
    }
}

const initiateCoinTrade = (dispatch: any) => {
    return async (id: number | Blob, amount: string | Blob, comment: string | Blob, image: string | any[], rate: string | Blob, callback: any) => {
        try {
            const token = await AsyncStorage.getItem('token')
            let formData = new FormData();
            formData.append(`receipt`, { uri: image.url, name: image.name, type: image.type })
            formData.append("coin_id", id);
            formData.append("rate", rate);
            formData.append("amount", amount);
            formData.append("comment", comment)

            const response = await fetch("https://bda418c1f2e2.ngrok.io/coin/initiate-trade", {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type': 'multipart/form-data',
                },
            });
            callback()
        }

        catch (error) {
            dispatch({ type: 'add_error', payload: "something went wrong, try again" })
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

const withdraw = (dispatch: any) => {
    return async (bank: string, amount: string) => {
        try {
            const token = await AsyncStorage.getItem('token')
            const response = await Server.post('/user/withdraw', {
                bank, amount
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                }
            )
            callback()

        } catch (error) {

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