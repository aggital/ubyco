import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Text, View, FlatList } from 'react-native';
import * as Element from 'react-native-elements'
import Title from '../components/theme/Title'
import ListItem from '../components/ListItem'
import Header from '../components/theme/Header'
import Card from '../components/card/Card'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { Context as Home } from '../context/HomeContext'


const Loading = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{ flexDirection: "row", alignItems: "center", height:50, width: 350, margin: 5  }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", height:50, width: 350 , margin: 5 }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", height:50, width: 350, margin: 5 }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const  HomeScreen = ({navigation}) =>{
  const [user, setUser] = React.useState({});
  const [card, setCard] = React.useState([])
  const {state, getUser, getCard} = React.useContext(Home);


  const fetchUser = async() => {
    let res = await getUser()
}
  const fetchCard = async() => {
    let res = await getCard()
  }

  React.useEffect(() => {
   fetchUser()
  },[]);

  React.useEffect(() => {
    fetchCard()
   },[]);

   console.log(state.card)
 





  return (
    <SafeAreaView style={{backgroundColor:'#f9e8ef', flex: 1}} >
        <View>
            <Header/>
        </View>
        
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
          <View style={{flex: 1, alignSelf:'center',}}>
            <Title name={'Welcome'} />
          </View>

          {/* customer Card */}
        <View style={{ alignSelf:'center', padding:10}}>
          <Card id={state.user.customer_id} amount={state.user.userAmount != null ? state.user.userAmount.amount : 'pending' }/>
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
              state.card.length > 0 ? state.card.map((l, i) => (
                <Element.ListItem 
                  key={i} bottomDivider 
                  style={{margin: 5, 
                  borderRadius: 12,
                  shadowColor:'#6236ff'

                }}>
                  <Element.ListItem.Content>
                    <ListItem name={l.name} rate={l.rate} image={l.image}/>
                  </Element.ListItem.Content>
                </Element.ListItem>
              )) : <Loading/>
            }
          </View>
         
            
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
