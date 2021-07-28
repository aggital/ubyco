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


export default function GiftCardScreen({ route, navigation }) {

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
  const cardTypes = state.card_type

  //fetch cards function
  const getCards = React.useCallback(() => {
    if (cards) {
      setBrand(cards.map((element: { id: any; name: any; }) => ({ key: element.id, label: element.name, value: element.name })));
    }
  }, [])

   //fecth cards on render
   React.useEffect(() => {
    getCards()
  }, [getCards]);

//when brand is selected
  const onBrandSelect = async (event: React.SetStateAction<string>) => {
    setBrandValue(event);
    setType([])
    setRate(null)
    setId(null)
    setAmount('')
    await cardType(event, (data: { map: (arg0: (element: any) => { key: any; label: any; value: any; rate: any; }) => React.SetStateAction<never[]>; }) => {
      setType(data.map((element) => ({ key: element.id, label: element.name, value: element.name, rate: element.rate })));
    });
  }

  //when card type is selected
  const onTypeSelect = (value: React.SetStateAction<string>) => {
    setTypeValue(value);
  }

  //on price change
  const priceChange = (value: React.SetStateAction<string>) => {
    let obj = type.find(o => o.label === typeValue);
    setId(obj.key)
    setRate(obj.rate)
    setAmount(value)
  }

//go to imagebrowser to fetch card
const pickImage = () => {
    navigation.navigate('ImageBrowser', {screen: 'GiftCardScreen', max: 6})
  }

//to render image when upload successfull
const renderImage = (item: { uri: any; }, i: React.Key | null | undefined) => {
  <Image
    style={{ height: 100, width: 100 }}
    source={{ uri: item.uri }}
    key={i}
  />
}

//submit card for trade
const tradeCard = async () => {
    //state.errorMessage = ''
    setLoading(true)
    await initiateCardTrade(id, amount, comment, image, rate, () => {
      console.log('submit successfully')
    })
    setLoading(false)
  };

//helps to update when price changes
React.useEffect(() => {
    const tot = Number(amount) * Number(rate)
   setTotal(`${tot}`)
  }, [amount]);

  //render image uploaded image
useFocusEffect(
    React.useCallback(() => {
      const photo = route.params?.photos
      const set = setImage(photo)
      return set
    }, [route.params])
  );
 

  
  return (
    <SafeAreaView style={{ backgroundColor: '#f9e8ef', flex: 1 }}>
      <View>
        <Header />
      </View>

      <KeyboardAwareScrollView style={{ marginTop: 40, flex: 1 }}>
        <View style={{ alignSelf: 'center', }}>
          <Title name={'Trade Cards'} />
        </View>




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
            onChangeText={(value: React.SetStateAction<string>) => priceChange(value)}
            keyType='phone-pad'
          // ref={amountRef}
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

          <Element.Button
            title="Upload Giftcard's*"
            titleStyle={{ alignSelf: 'flex-end', color: 'black' }}
            buttonStyle={{ borderRadius: 40, borderColor: 'red', }}
            containerStyle={{ margin: 20, height: 40, borderColor: 'red' }}
            onPress={pickImage}
            type="outline"
            icon={
              <Element.Icon
                name="card-giftcard"
                type='material-icon'
                size={18}
                color="red"

              />
            }
          />

          <View style={{flexDirection:'row'}}>
          {image &&
            image.map((item, i) =><Element.Image source={{ uri: item.uri }} key={i} style={{width: 50, height: 50, margin: 4 }} />)
          }
          </View>
          


          <Element.Input
            placeholder='Add a Comment'
            containerStyle={{
              alignSelf: 'center',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: 'red'
            }}
            inputContainerStyle={{
              width: 300,
              padding: 7
            }}
            multiline={true}
            value={comment}
            onChangeText={setComment}
          // ref={commentRef}

          />
          <View style={{ marginTop: 10 }}>
            <Button title="Trade Card" onPress={tradeCard} loading={loading} />
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