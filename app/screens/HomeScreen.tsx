import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import * as Element from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Title from '../components/theme/Title'

import Header from '../components/theme/Header'
import Card from '../components/card/Card'
import Navigation from '../navigation';


export default function HomeScreen() {
  const buttons = ['Gift Card', 'crypto']
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View>
            <Header/>
        </View>
       
        <ScrollView style={{marginTop: 40}}>
          {/* //Title */}
          <View style={{flex: 1, alignSelf:'center'}}>
            <Title name={'Welcome'} />
          </View>

          {/* customer Card */}
        <View style={{ alignSelf:'center', padding:10}}>
          <Card id='customer 007' amount='2000'/>
        </View>

        {/* Action starts here */}
        <View style={{ padding: 10}}>
          <Element.Text style={{color: '#6236ff', fontSize: 18}}>
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
                color='#6236ff'
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
                color='#6236ff'
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
                color='#6236ff'
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
         <View style={{ padding: 10}}>
         <Element.Text style={{color: '#6236ff', fontSize: 18}}>
            Top Rated
          </Element.Text>
        <Element.ButtonGroup
          onPress={()=>console.log('working')}
          selectedIndex={buttons[1]}
          buttons={buttons}
          containerStyle={{height: 30, margin:20}}
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
