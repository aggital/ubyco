import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import Card from '../components/card/Card'
import RandomInput from '../components/RandomInput';
import Picker from '../components/Picker'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Button from '../components/Button'
const WithdrawalScreen = () => {
    const [amount, setAmount] = React.useState('')
    const [account, setAccount] = React.useState([])
    const [value, setValue] = React.useState('')

    const list = [
        {
            id: 1,
            account_name:'Oyewo oluwafemi',
            account_number: '0232882872',
            bank: 'wema'
        }
    ]

    React.useEffect(() => { 
        async function getAccount() {
        setAccount(list.map(({ id,account_name, account_number, bank }) => ({ key:id, label: `${account_name} ${account_number} ${bank}` , value: `${account_number}`})));
        }
        getAccount();
        }, []);
    return (
        <SafeAreaView style={{backgroundColor:'#f9e8ef', flex: 1}}>
            <Header/>
     
     
            <View style={{alignSelf:'center', marginTop: 20}}>
                <Title name={'Withdraw Funds'} />
            </View>

        <View style={{ alignSelf:'center', padding:10}}>
          <Card id='customer 007' amount='2000'/>
        </View>
        
        <KeyboardAwareScrollView>
        <RandomInput title= 'Amount' placeholder='0' keyType='phone-pad' onChangeText={value}/>
        <Picker
                 title="Account" 
                 placeholder="Select A Card Brand" 
                 items={account}
                 value={`${value}`}
                 onValueChange = {(value) => setValue(value)}
                 require = '*'
            />
        <View style={{marginHorizontal: 30, marginTop: 20}}>
        <Button title= "Request Withdrawal" onPress={()=>console.log('i want my money')}/>
        </View>
       
        </KeyboardAwareScrollView>
        

        </SafeAreaView>
    )
}

export default WithdrawalScreen

const styles = StyleSheet.create({})
