import * as React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Platform } from 'react-native';
import { Text, View, FlatList, Image } from 'react-native';
import * as Element from 'react-native-elements'
import Picker from '../components/Picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import RandomInput from '../components/RandomInput';
import Button from '../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFocusEffect } from '@react-navigation/native';

import { Context as Home } from '../context/HomeContext'


export default function GiftRate() {

  //cardbrand and card type state to hold context api data state
  const [brand, setBrand] = React.useState([]);
  const [type, setType] = React.useState([]);
  //card and type selected value
  const [brandValue, setBrandValue] = React.useState("");
  const [typeValue, setTypeValue] = React.useState("");
  const [loading, setLoading] = React.useState(false)
  //amount state
  const [amount, setAmount] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [rate, setRate] = React.useState(null)
  const [id, setId] = React.useState(null)
  const [image, setImage] = React.useState(null);

  //total state
  const [total, setTotal] = React.useState(null);
  const { state, cardType, initiateCardTrade } = React.useContext(Home);

  // data coming Context Api State
  const cards = state.card
  //fetch cards function
  const getCards = React.useCallback(() => {
    if (cards) {
      setBrand(cards.map((element:any) => ({ key: element.id, label: element.name, value: element.name })));
    }
  }, [])

   //fecth cards on render
   React.useEffect(() => {
    getCards()
  }, [getCards]);

//when brand is selected
  const onBrandSelect = async (event:string) => {
    setBrandValue(event);
    setType([])
    setRate(null)
    setId(null)
    setAmount('')
    await cardType(event, (data:object) => {
      setType(data.map((element:object) => ({ key: element.id, label: element.name, value: element.name, rate: element.rate })));
    });
  }

  //when card type is selected
  const onTypeSelect = (value:string) => {
    setTypeValue(value);
  }

  //on price change
  const priceChange = (value) => {
    let obj = type.find(o => o.label === typeValue);
    setId(obj.key)
    setRate(obj.rate)
    setAmount(value)
  }

//helps to update when price changes
React.useEffect(() => {
    const tot = Number(amount) * Number(rate)
   setTotal(`${tot}`)
  }, [amount]);
  
  return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={{ alignSelf: 'center' }}>
          <Picker
            title="Brand"
            placeholder="Select A Card Brand"
            items={brand}
            value={brandValue}
            onValueChange={(event) => onBrandSelect(event)}
            require='*'
          />
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />

          <Picker
            title="Card Type"
            placeholder="Select A Card Brand"
            items={type}
            value={typeValue}
            onValueChange={(value) => onTypeSelect(value)}
            require='*'
          />
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />

          <RandomInput
            title='Amount'
            placeholder='$'
            value={amount}
            onChangeText={(value) => priceChange(value)}
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
            keyType='default'
          // ref={totalRef}
          />

          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}
          />
        </View>



      </KeyboardAwareScrollView>
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