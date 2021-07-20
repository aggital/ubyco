import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Linking,
} from 'react-native';
import * as Element from 'react-native-elements'

import { Context as AuthContext } from '../context/AuthContext'
import { Context as HomeContext } from '../context/HomeContext'

import { useNavigation } from '@react-navigation/core';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Navigation from '.';

interface Props {
    orientation: string;
}

const CustomSideBar = (props: Props) => {
  const navigation = useNavigation();
  const {Logout} = React.useContext(AuthContext);
  const {state} = React.useContext(HomeContext);

  const logout = async () => {
    await Logout(() => {
        console.log('something fisshy')
        navigation.navigate('Login')
    })
};

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <DrawerContentScrollView {...props}>
        {/* User Avatar */}
      <View style={styles.profile}> 
        <Element.Avatar
                rounded
                size="medium"
                source={{
                    uri:
                    'https://avatars.githubusercontent.com/u/10562193?v=4',
                }}
                containerStyle={styles.sideMenuProfileIcon}
        />
            <View>
                <Element.Text style={styles.profileName}>
                   {state.user.fullname}
                </Element.Text>
                <Element.Text style={styles.customer_id}>
                {state.user.customer_id}
                </Element.Text>
            </View>
        </View>
      <View style= {styles.balanceCard}>
        <Element.Text h4 style={{color:'white'}}>
           Available Balance
        </Element.Text>
        <Element.Text h4 style={{color:'white', fontWeight:'bold'}}>
           N {state.user.userAmount != null ? state.user.userAmount.amount : 'pending'}
        </Element.Text>
        <Element.Button
        icon={
            <Element.Icon
            name="long-arrow-right"
            type='font-awesome'
            size={15}
            color="white"
        />}
        
        title="Request Withdrawal"
        type="clear"
        titleStyle={{color: '#fff', marginLeft: 10}}
        containerStyle={{
            alignItems: 'flex-start',
            marginTop: 10,

        }}
        />

      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        icon={({ focused, color, size }) => 
            <Element.Icon 
                color={"#f63757"} 
                size= {24}
                name={focused ? 'info' : 'info'}/>
        }
        onPress={() => alert('Link to help')} />
      

    <DrawerItem
        label="Logout"
        icon={({ focused, color, size }) => 
            <Element.Icon 
                color={"#f63757"} 
                size= {24}
                type= 'font-awesome'
                name={focused ? 'sign-out' : 'sign-out'}/>
        }
        onPress={logout} 
      />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Element.Text
            style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
            }}>
            UBYCO © 2021
        </Element.Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    profile:{
        flexDirection: 'row'
    },
    profileName:{
        paddingTop: 30,
        fontSize: 15,
        fontWeight: 'bold'
    },
    customer_id:{
        color:'#f63757',
        fontWeight:'bold'
    },
    balanceCard:{
        flexDirection:'column',
        width: 300,
        height: 120,
        backgroundColor: '#f63757',
        padding: 10
    },
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'flex-start',
      padding: 10
    },
    footer:{
        height: 30,
        marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    borderRadius:2,
    shadowRadius: 0.4,
    borderTopColor:'red',
    elevation: 5      
    }
  });
  
  export default CustomSideBar;
  
  