import * as React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import {View } from 'react-native';
import * as Element from 'react-native-elements'
import Picker from '../components/Picker'
import Title from '../components/theme/Title'
import Header from '../components/theme/Header'
import RandomInput from '../components/RandomInput';
import Button from '../components/Button'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { Context as Home } from '../context/HomeContext'
import { onChange } from 'react-native-reanimated';
// import * as ImagePicker from 'expo-image-picker';



export default function CoinScreen({navigation}) {
  const [coin, setCoin] = React.useState([]);
  const [image, setImage] = React.useState(null);

  const [coinValue, setCoinValue] = React.useState("");
  const [price, setPrice] =  React.useState('');
  const [total, setTotal] = React.useState('');
  const {coinType } = React.useContext(Home);

  const fetchCoinData = React.useCallback(async() => {
    await coinType((data) => {
      setCoin(data.map((element) => ({ key: element.id, label: element.name, value: element.name, rate: element.rate})));
    })
  }, [])
  
  React.useEffect(()=>{
    fetchCoinData()
  },[fetchCoinData])

  const onChangePrice = (e) => {
    setPrice(e)
    let tot = Number(e) * 100
    setTotal(`${tot}`)
  }

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsMultipleSelection: true,
    //   // allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }()

    console.log('want to die abi')
  };


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
              placeholder="Select A Coin Brand" 
              items={coin}
              value={coinValue}
              onValueChange = {(value) => setCoinValue(value)}
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
            onChangeText={(e)=>onChangePrice(e)}
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
            onPress={pickImage}
            type="outline"
         />
          {image && <Element.Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}



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