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
 
  const [value, setValue] = React.useState(0);
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
        <View style={{alignSelf:'center',}}>
            <Title name={'Rate Caluculator'} />
          </View>
         <View style={{margin: 20}}>
            <Element.Tab value={value} indicatorStyle={{backgroundColor:'#f63757', }}>
                <Element.Tab.Item title="Giftcard" />
                <Element.Tab.Item title="Crypto" />
            </Element.Tab>
         </View>
        </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
}); 