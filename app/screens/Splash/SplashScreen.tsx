import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Context as AuthContext } from '../../context/AuthContext'
const SplashScreen = ({ navigation}) => {
const {state, checkToken} = React.useContext(AuthContext)


const fetchToken = async() => {
   const token = await AsyncStorage.getItem('token')
   state.token = token
   token ? navigation.navigate('Root'): navigation.navigate('Signin')
  
//    console.log(token)
}

React.useEffect(()=>{
    fetchToken()
    console.log(state)
},[])

    return null
}

export default SplashScreen