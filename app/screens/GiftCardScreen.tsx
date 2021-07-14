import * as React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import * as Element from 'react-native-elements'
import Picker from '../components/Picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import RandomInput from '../components/RandomInput';
import Button from '../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Context as Home } from '../context/HomeContext'




export default function GiftCardScreen({ navigation }) {
  const [brand, setBrand] = React.useState([]);
  const [type, setType] = React.useState([]);

  const [brandValue, setBrandValue] = React.useState("");
  const [typeValue, setTypeValue] = React.useState("");

  const [price, setPrice] = React.useState('');
  const [total, setTotal] = React.useState('');
  const { state, getCard, cardType } = React.useContext(Home);

  const shows = state.card != null ? state.card : 'loading'

  //fetch cards function
  const getData = React.useCallback(() => {
    setBrand(shows.map((element) => ({ key: element.id, label: element.name, value: element.name })));
  }, [])

  //let card be available onMount
  React.useEffect(() => {
    getData()
  }, [getData]);

  //on select card brand, run this function
  const onBrandSelect = async (event) =>{
    setBrandValue(event);
   setType([])
    let data;
    brand !== null || undefined ? data = brand.find(element => element.value ===  event) : []
    const key =  data.key //am not suppose to do this, and i will change you once i got what i want

    console.log(key)
    // Call to context api to fetch related cards
       await cardType(key, () => {
       setType(state.card_type.map((element) => ({ key: element.id, label: element.name, value: element.name })))
       setTotal(state.card_type.rate)
        
    })
  }

  const onTypeSelect = async (value) =>{
    setTypeValue(value);
    const tal = Number(price) * 300
    setTotal(`${tal}`)
    
  }

  console.log(state.card_type)

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
              itemKey={brand.key}
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
              title='Price'
              placeholder='$'
              value={price.toString()}
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
              keyType='default'
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
              onPress={() => console.log('somthing should be done')}
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