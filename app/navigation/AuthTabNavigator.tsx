/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import TabOneScreen from '../screens/HomeScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import { AuthTabParamList, HomeParamList} from '../types';
 
 const DrawerTab = createStackNavigator<AuthTabParamList>();
 
 export default function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <DrawerTab.Navigator
       initialRouteName="TabOne"
      >
       <DrawerTab.Screen
         name="TabOne"
         component={TabOneNavigator}
       />
       <DrawerTab.Screen
         name="TabTwo"
         component={TabTwoNavigator}
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
 const TabOneStack = createStackNavigator<TabOneParamList>();
 
 function TabOneNavigator() {
   return (
     <TabOneStack.Navigator>
       <TabOneStack.Screen
         name="TabOneScreen"
         component={TabOneScreen}
         options={{ headerTitle: 'Tab One Title' }}
       />
     </TabOneStack.Navigator>
   );
 }
 
 const TabTwoStack = createStackNavigator<TabTwoParamList>();
 
 function TabTwoNavigator() {
   return (
     <TabTwoStack.Navigator>
       <TabTwoStack.Screen
         name="TabTwoScreen"
         component={TabTwoScreen}
         options={{ headerTitle: 'Tab Two Title' }}
       />
     </TabTwoStack.Navigator>
   );
 }
 