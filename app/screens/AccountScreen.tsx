import * as React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Platform } from 'react-native';
import { Text, View, FlatList, Image } from 'react-native';
import AccountCard from '../components/card/AccountCard';
import Picker from '../components/Picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import RandomInput from '../components/RandomInput';
import Button from '../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Context as Home } from '../context/HomeContext'


export default function AccountScreen() {

    //cardbrand and card type state to hold context api data state
    const [bank, setBank] = React.useState([]);
    const [bankValue, setBankValue] = React.useState("");
    const [accountNumber, setAccountNumber] = React.useState(null);
    const [accountName, setAccountName] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [account, setAccount] = React.useState(null)
    const [bankName, setBankName] = React.useState(null)


    const [code, setCode] = React.useState(null);
    //card and type selected value
    const { state, fetchBank, bankAccountName, addAccount, getAccount } = React.useContext(Home);


    //fetch cards function
    const getBanks = React.useCallback(async () => {
        await fetchBank((data: { map: (arg0: (element: any) => { key: any; label: any; value: any; code: any; }) => React.SetStateAction<never[]>; }) => {
            setBank(data.map((element: { id: any; name: any; code: any; }) => ({ key: element.id, label: element.name, value: element.name, code: element.code })))
        })
        await getAccount((data: React.SetStateAction<null>) =>{
            setAccount(data)
        })

    }, [])

    //fecth cards on render
    React.useEffect(() => {
        getBanks()
    }, [getBanks]);

    //when brand is selected
    const onBrandSelect = async (event: React.SetStateAction<string>) => {
        setAccountName(null)
        setAccountNumber(null)
        setBankValue(event);
    }

    const setNumber = (e: React.SetStateAction<null>) => {
        setAccountNumber(e)
        if (bankValue != null) {
            let obj = bank.find(o => o.value === bankValue)
            console.log(obj)
            setCode(obj.code)
            setBankName(obj.value)
        } else {
            alert('select a valid bank')
        }
    }


    const fetchName = async () => {
        await bankAccountName(code, accountNumber, (data: React.SetStateAction<null>) => {
            setAccountName(data)
        })
    }

    const submit = async () => {
        setLoading(true)
        console.log(code, accountNumber, accountName, bankName) 
        await addAccount(code, accountNumber, accountName, bankName, (data: any) => {
            setAccountName(null)
            setAccountNumber(null)
            setCode(null)
            setLoading(false)
            alert(data)
        })
    }


    //helps to update when price changes
    React.useEffect(() => {
        if (accountNumber != null && accountNumber.length > 9) {
            fetchName()
        }
    }, [accountNumber]);





    return (
        <SafeAreaView style={{ backgroundColor: '#f9e8ef', flex: 1 }}>
            <View>
                <Header />
            </View>

            <KeyboardAwareScrollView style={{ marginTop: 40, flex: 1 }}>
                <View style={{ alignSelf: 'center', }}>
                    <Title name={'Accounts Detail'} />
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Picker
                        title="Bank Name"
                        placeholder="Select A Bank"
                        items={bank}
                        value={bankValue}
                        onValueChange={(event) => onBrandSelect(event)}
                        require='*'
                    />
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                        }}
                    />
                    <RandomInput
                        title='Account Number'
                        placeholder='Account Number'
                        value={accountNumber}
                        onChangeText={(e: any) => setNumber(e)}
                        keyType='phone-pad'
                    />
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                        }}
                    />


                    <RandomInput
                        title='Account Name'
                        placeholder='Account name'
                        value={accountName}
                        onChangeText={setAccountName}
                        keyType='phone-pad'
                        disable
                    />



                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                        }}
                    />

                    <View style={{ marginTop: 10 }}>
                        <Button title="Add Account" onPress={submit} loading={loading} />
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', padding: 20}}>
                     {
                     account != null ? account?.map((l: { bank: string; account_number: string; account_name: string; },i: React.Key | null | undefined) =>(
                            <AccountCard
                            key={i}
                            bank={l.bank}
                            accountNumber={l.account_number}
                            name={l.account_name}
                        /> 
                     )) : <Text> No account Yet</Text>
                    }
                    </View>
                        

                </View>



            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectCard: {
        borderColor: 'green',
        position: 'absolute',
        marginLeft: 100
    },

});