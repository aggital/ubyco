import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Picker from './Picker'
import RandomInput from './RandomInput';
import Button from './Button'
import { Context as Home } from '../context/HomeContext'

const CryptoRate = () => {
    const [coin, setCoin] = React.useState([]);
    const [value, setValue] = React.useState(null);
    const [total, setTotal] = React.useState(null);
    const [amount, setAmount] = React.useState(null);
    const [rate, setRate] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const {coinType} = React.useContext(Home);

   

    const fetchCoinData = React.useCallback(async() => {
        await coinType((data:[]) => setCoin(data.map((element) => ({ key: element.id, label: element.name, value: element.name, rate: element.rate }))))
      }, [])
    
     React.useEffect(()=>{
        fetchCoinData()
      },[fetchCoinData])

    const result =() =>{
        if(value != ""){
            setLoading(true)
            let tot = Number(rate) * Number(amount)
            setTotal(`${tot}`)
            setLoading(false)
        }else{
            alert('fill the require column')
        }
      
    } 

      const onBrandSelect = async (e:string) => {
        setValue(e)
        setRate(null)
        setAmount(null)
        setTotal(null)
    }

      const onChangePrice = (e) => {
        if(value != null){
            let obj = coin.find(o => o.label === value);
            setRate(obj.rate)
            setAmount(e)
          }else{
            alert('select a Coin to proceed')
          }
      }

    return (
        <KeyboardAwareScrollView>
            <Picker
                 title="Coin" 
                 placeholder="Select A Card Brand" 
                 items={coin}
                 value={`${value}`}
                 onValueChange = {(e) => onBrandSelect(e)}
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
                value={amount}
                onChangeText={(e) => onChangePrice(e)}
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

        <Button title='Calculate' onPress={result} loading={loading} />
        </KeyboardAwareScrollView>
    )
}

export default CryptoRate

const styles = StyleSheet.create({})
