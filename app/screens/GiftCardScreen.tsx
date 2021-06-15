import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import * as Element from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Title from '../components/theme/Title'
import ListItem from '../components/ListItem'
import Header from '../components/theme/Header'
import Card from '../components/card/Card'
import Navigation from '../navigation';





export default function GiftCardScreen() {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("");
  
  const list = [
                    {
                        id: 1,
                        card: 'itunes',
                        name: 'Itunes Card',
                        rate: '400/$',
                        image_url: 'Vice President'
                    },
                    
                    {
                        id: 2,
                        card: 'vanila',
                        name: 'Vanila Card',
                        rate: '239/$',
                        image_url: 'Vice President'
                    },

                    {
                        id: 3,
                        card: 'apple',
                        name: 'Apple Pay',
                        rate: '450/$',
                        image_url: 'Vice President'
                    },

                    {
                        id: 4,
                        card: 'Ebay',
                        name: 'Ebay Pay',
                        rate: '450/$',
                        image_url: 'Vice President'
                    },

                    {
                        id:4,
                        card: 'Master Card',
                        name: 'Apple Pay',
                        rate: '450/$',
                        image_url: 'Vice President'
                    },
                ];

    React.useEffect(() => {
      async function getCard() {
        setCard(list.map(({ name }) => ({key: name.id, label: name, value: name})));
      }
      getCard();
    }, []);

     const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#f9e8ef'}} >
        <View>
            <Header/>
        </View>
       
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
          {/* Title */}
          <View style={{flex: 1, alignSelf:'center',}}>
            <Title name={'Trade Cards'} />
          </View>
          <View>
             <RNPickerSelect
                placeholder={{}}
                items={list}
                onValueChange={()=>getCard()}
                InputAccessoryView={() => null}
                // style={pickerSelectStyles}
                value={setCard}
              />
          </View>

            
        
        
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
