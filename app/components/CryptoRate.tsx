import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Picker from './Picker'
import RandomInput from './RandomInput';
import Button from './Button'

const CryptoRate = () => {
    const [coin, setCoin] = React.useState([]);
    const [value, setValue] = React.useState("");
    const [total, setTotal] = React.useState("");
    const [amount, setAmount] = React.useState("");

    const list = [
        {
            id: 1,
            coin : 'Btc',
            rate: '400/$',
            image_url: 'Vice President'
        },
        
        {
            id: 2,
            coin : 'Etherum',
            rate: '239/$',
            image_url: 'Vice President'
        },

        {
            id: 3,
            coin : 'Dodge Coin',
            rate: '450/$',
            image_url: 'Vice President'
        },

        {
            id: 4,
            coin : 'Bhc',
            rate: '450/$',
            image_url: 'Vice President'
        },

        {
            id:4,
            coin : 'Bitcoin cash',
            rate: '450/$',
            image_url: 'Vice President'
        },
    ];

React.useEffect(() => {
async function getCoin() {
setCoin(list.map(({ coin }) => ({ label: coin, value: coin})));
}
getCoin();
}, []);
    return (
        <KeyboardAwareScrollView>
            <Picker
                 title="Coin" 
                 placeholder="Select A Card Brand" 
                 items={coin}
                 value={`${value}`}
                 onValueChange = {(value) => setValue(value)}
                 require = '*'
            />
             <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />

            <RandomInput
                title='Amount'
                placeholder='0'
                value={total}
                onChangeText={setTotal}
                keyType='phone-pad'
            />

        <RandomInput 
            title='Total'
            placeholder='0'
            value={total}
            onChangeText={setTotal}
            disable
            keyType='numbers-and-punctuation'
            />

        <Button title='Calculate' onPress={()=>console.log("working")} />
        </KeyboardAwareScrollView>
    )
}

export default CryptoRate

const styles = StyleSheet.create({})
