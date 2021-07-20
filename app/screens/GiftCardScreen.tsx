import * as React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Platform } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import * as Element from 'react-native-elements'
import Picker from '../components/Picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import RandomInput from '../components/RandomInput';
import Button from '../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker';

import { Context as Home } from '../context/HomeContext'





function useDidUpdate (callback, deps) {
  const hasMount = React.useRef(false)
  React.useEffect(() => {
    if (hasMount.current) {
      callback()
    } else {
      hasMount.current = true
    }
  }, deps)
}


export default function GiftCardScreen({ navigation }) {
 //image state
  const [image, setImage] = React.useState(null);

//cardbrand and card type state to hold context api data state
  const [brand, setBrand] = React.useState([]);
  const [type, setType] = React.useState([]);

//card and type selected value
  const [brandValue, setBrandValue] = React.useState("");
  const [typeValue, setTypeValue] = React.useState("");

//amount state
  const [amount, setAmount] = React.useState('');

//total state
  const [total, setTotal] = React.useState('');
  const { state, getCard, cardType } = React.useContext(Home);

// data coming Context Api State
  const cards = state.card
  const cardTypes = state.card_type

//fetch cards function
  const getCards = React.useCallback(() => {
    if(cards){
      setBrand(cards.map((element) => ({ key: element.id, label: element.name, value: element.name })));
    }
  }, [])

  //fecth cards on render
  React.useEffect(() => {
    getCards()
  }, [getCards]);

  //when a card is selected
  const onBrandSelect =  async(event) => {
    setBrandValue(event);
    await cardType(event, ()=>{
      if (cardTypes){
        setType(cardTypes.map((element) => ({ key: element.id, label: element.name, value: element.name })));
      }
    })
  };

  //on select card brand, run this function
  const onTypeSelect = (value) =>{
    setTypeValue(value);
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  let id;
  const priceChange = (value) =>{
    setAmount(value)
    const tot = Number(amount) * Number(`${state.card_type[0].rate}`)
    setTotal(`${tot}`)
  }
 
  
 

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
              onChangeText={(value)=>priceChange(value)}
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

            {image && <Element.Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}


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
             // ref={commentRef}

            />
            <View style={{ marginTop: 10 }}>
              <Button title="Trade Card" />
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