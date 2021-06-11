/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons, AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import * as Element from 'react-native-elements'

 import HomeScreen from '../screens/HomeScreen';
 
 import { HomeParamList} from '../types';
 import CustomSideBar from './CustomSideBar'
 
 const DrawerTab = createDrawerNavigator();


 
 export default function DrawerTabNavigator() {
//    const colorScheme = useColorScheme();
   return (
     <DrawerTab.Navigator
     drawerContentOptions={{
        activeTintColor: '#6236FF',
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
                            color="#6236ff" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Giftcards"
                component={HomeNavigator}
                options={{

                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="cards" 
                            size={24} 
                            color="#6236ff" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Coins"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="bitcoin" 
                            size={24} 
                            color="#6236ff" />
                    )
                }}
            />

            <DrawerTab.Screen
                name="Rate Calculator"
                component={HomeNavigator}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                            name="calculator" 
                            size={24} 
                            color="#6236ff" />
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
                            color="#6236ff" />
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
                            color="#6236ff" />
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
                            color="#6236ff" />
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
                            color="#6236ff" />
                    )
                }}
            />
     </DrawerTab.Navigator>
   );
 }
 
 // You can explore the built-in icon families and icons on the web at:
 // https://icons.expo.fyi/
 function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
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
 
