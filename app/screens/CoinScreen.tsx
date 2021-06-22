import * as React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import * as Element from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import Picker from '../components/Picker'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Title from '../components/theme/Title'
import Input from '../components/Input'
import Header from '../components/theme/Header'
import Navigation from '../navigation';
import RandomInput from '../components/RandomInput';
import Button from '../components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default function CoinScreen() {
  const [coin, setCoin] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [price, setPrice] =  React.useState(0);
  const [ total, setTotal] = React.useState(0);

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
        setCoin(list.map(({ coin }) => ({key: coin.id, label: coin, value: coin})));
      }
      getCoin();
    }, []);

    const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#f9e8ef', flex: 1}}>
        <View>
            <Header/>
        </View>
       
        <KeyboardAwareScrollView style={{marginTop: 40, marginBottom:30, flex: 1}}>
          {/* Title */}
          <View style={{alignSelf:'center',}}>
            <Title name={'Trade Coin'} />
          </View>

          <View style={{ alignSelf: 'center'}}>
            
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
            title='Price'
            placeholder='$'
            value={price}
            onChangeText={setPrice}
            keyType='phone-pad'
            />

          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />

          <RandomInput 
            title='Total'
            placeholder='0'
            value={total}
            onChangeText={setTotal}
            disable
            />

          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />

          <Element.Button 
            title= "Upload Receipt"
            titleStyle={{alignSelf:'flex-end', color:'black'}}
            buttonStyle={{borderRadius: 40, borderColor:'red',  }}
            containerStyle={{margin:20, height: 40, borderColor:'red'}}
            onPress={()=>console.log('somthing should be done')}
            type="outline"
         />


         <Element.Input
            placeholder='Add a Comment'
            containerStyle={{
              alignSelf:'center',
              borderWidth:2,
              borderRadius: 10,
              borderColor: 'red'
           }}
            inputContainerStyle={{
              width:300,
              padding: 7
            }}
            multiline={true}

         />
         <View style={{marginTop: 10}}>
            <Button title = "Sale Coin" onPress={()=>console.log('proceess Coil')} />
         </View>
         <View>
             <Element.Text style={{fontSize: 12, color:'red'}}>
                    Note: Users are to upload screenshot of sending apps alone
             </Element.Text>
         </View>
      </View>

        </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
}); 