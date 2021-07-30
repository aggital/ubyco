import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ScrollView, SafeAreaView, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import Card from '../components/card/Card'
import RandomInput from '../components/RandomInput';
import Picker from '../components/Picker'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Button from '../components/Button'
import { Context as Home } from '../context/HomeContext'
const WithdrawalScreen = () => {
    const [amount, setAmount] = React.useState('')
    const [account, setAccount] = React.useState([])
    const [value, setValue] = React.useState('')
    const [noAccount, setNoAccount] = React.useState(true)

    const {state, getUser, getAccount} = React.useContext(Home);

    const fetchUser = async() => {
        await getAccount((data: React.SetStateAction<null>) => {
            if (data == null){
                setNoAccount(false)
        }else{
            setAccount(data.map((element: { id: any; bank: string; code: any; }) => ({ key: element.id, label: element.bank, value: element.bank, code: element.code })))
        } 
        });
    }

    const requestWithdrawal = async() => {

    }
 
    

React.useEffect(() => {
   fetchUser()
  },[]);

    return (
        <SafeAreaView style={{backgroundColor:'#f9e8ef', flex: 1}}>
            <Header/>
     
     
            <View style={{alignSelf:'center', marginTop: 20}}>
                <Title name={'Withdraw Funds'} />
            </View>

       <View style={{ alignSelf:'center', padding:10}}>
          <Card id={state.user.customer_id} amount={state.user.userAmount != null ? state.user.userAmount.amount : 'pending' }/>
        </View>
        
        <KeyboardAwareScrollView>
        <RandomInput title= 'Amount' placeholder='0' keyType='phone-pad' onChangeText={setAmount} value={amount}/>
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
        {!noAccount? <Text>No Account</Text> : null}
        </View>
       
        </KeyboardAwareScrollView>
        

        </SafeAreaView>
    )
}

export default WithdrawalScreen

const styles = StyleSheet.create({})
