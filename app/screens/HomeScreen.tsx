import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import * as Element from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Title from '../components/theme/Title'
import ListItem from '../components/ListItem'
import Header from '../components/theme/Header'
import Card from '../components/card/Card'
import Navigation from '../navigation';





export default function HomeScreen() {
  const list = [
    {
      name: 'Itunes Card',
      rate: '400/$',
      image_url: 'Vice President'
    },
    {
      name: 'Vanila Card',
      rate: '239/$',
      image_url: 'Vice President'
    },
    {
      name: 'Apple Pay',
      rate: '450/$',
      image_url: 'Vice President'
    },
    {
      name: 'Apple Pay',
      rate: '450/$',
      image_url: 'Vice President'
    },
    {
      name: 'Apple Pay',
      rate: '450/$',
      image_url: 'Vice President'
    },
  ];
    
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#f9e8ef'}} >
        <View>
            <Header/>
        </View>
       
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
          {/* Title */}
          <View style={{flex: 1, alignSelf:'center',}}>
            <Title name={'Welcome'} />
          </View>

          {/* customer Card */}
        <View style={{ alignSelf:'center', padding:10}}>
          <Card id='customer 007' amount='2000'/>
        </View>
        <View style={{flex: 1, borderTopEndRadius:50, borderTopLeftRadius:50, height: '100%'}}>
          {/* Action starts here */}
          <View style={{ padding: 10}}>
            <Element.Text style={{color: '#333333', fontSize: 18, fontWeight:'bold'}}>
              Transactions 
            </Element.Text>
            <View style={{
              flexDirection: 'row', 
              padding:10, 
              justifyContent:'space-between',
              marginHorizontal:30 
            }}>
              <View style={{alignContent: 'flex-start'}}> 
              <Element.Icon
                  reverse
                  name='cards'
                  type='material-community'
                  color='#f63757'
                  onPress={()=>{console.log('working')}}
                />
                <Element.Text>
                  Gift Cards
                </Element.Text>
              </View>
              <View style={{alignItems: 'center'}}> 
              <Element.Icon
                  reverse
                  name='bitcoin'
                  type='material-community'
                  color='#f63757'
                  onPress={()=>{console.log('working')}}
                />
                <Element.Text>
                  Crypto
                </Element.Text>
              </View>
              <View style={{alignItems: 'flex-end'}}> 
              <Element.Icon
                  reverse
                  name='bank'
                  type='material-community'
                  color='#f63757'
                  onPress={()=>{console.log('working')}}
                />
                <Element.Text>
                  Withdraw
                </Element.Text>
              </View>
            </View>
          </View>
          {/* Actions ends here */}

          {/* Top rated Cards */}
          {/* Action starts here */}
          <View style={{margin: 10}}>
          <Element.Text style={{color: '#333333', fontSize: 18, fontWeight:'bold'}}>
              Popular Brands
          </Element.Text>
          <View>
            {
              list.map((l, i) => (
                <Element.ListItem 
                  key={i} bottomDivider 
                  style={{margin: 5, 
                  borderRadius: 12,
                  shadowColor:'#6236ff'

                }}>
                  <Element.ListItem.Content>
                    <ListItem name={l.name} rate={l.rate}/>
                  </Element.ListItem.Content>
                </Element.ListItem>
              ))
            }
          </View>
         
            
          </View>
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
