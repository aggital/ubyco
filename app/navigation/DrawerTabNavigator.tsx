/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons, AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import HomeScreen from '../screens/HomeScreen';
 import GIftCardScreen from '../screens/GiftCardScreen';
 import { HomeParamList} from '../types';
 import CustomSideBar from './CustomSideBar'
import GiftCardScreen from '../screens/GiftCardScreen';
import CoinScreen from '../screens/CoinScreen';
import RateCalculatorScreen from '../screens/RateCalculatorScreen'
 
 const DrawerTab = createDrawerNavigator();


 
 export default function DrawerTabNavigator() {
//    const colorScheme = useColorScheme();
   return (
     <DrawerTab.Navigator
     drawerContentOptions={{
        activeTintColor: '#f63757',
        itemStyle: {marginVertical: 5},
      }}
      screenOptions= {{
        headerShown:false
    }}
      drawerContent={(props) => <CustomSideBar {...props} />}
      >
            <DrawerTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="home-circle" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Giftcards"
                component={GiftNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="cards" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Coins"
                component={CoinNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="bitcoin" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Rate Calculator"
                component={RateNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="calculator" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="withdrawal"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="bank" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Account Details"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <AntDesign
                            name="user" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Inbox"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="email" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Notifications"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <AntDesign
                            name="bells" 
                            size={24} 
                            color="#f63757" />
                    )
                }}
            />
     </DrawerTab.Navigator>
   );
 }
 
 
 // Each tab has its own navigation stack, you can read more about this pattern here:
 // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 const HomeStack = createStackNavigator<HomeParamList>();
 
 function HomeNavigator() {
   return (
     <HomeStack.Navigator>
       <HomeStack.Screen
         name="HomeScreen"
         component={HomeScreen}
         options={{
            headerShown: false
          }}
       />
     </HomeStack.Navigator>
   );
 }

 function GiftNavigator() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="GiftCardScreen"
          component={GiftCardScreen}
          options={{
             headerShown: false
           }}
        />
      </HomeStack.Navigator>
    );
  }

  function CoinNavigator() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="CoinScreen"
          component={CoinScreen}
          options={{
             headerShown: false
           }}
        />
      </HomeStack.Navigator>
    );
  }

  function RateNavigator() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="RateCalculatorScreen"
          component={RateCalculatorScreen}
          options={{
             headerShown: false
           }}
        />
      </HomeStack.Navigator>
    );
  }

 