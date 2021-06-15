/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';

 import LoginScreen from '../screens/Auth/LoginScreen';
 import SignUpScreen from '../screens/Auth/SignUpScreen';
 import VerifyScreen from '../screens/Auth/VerifyScreen'
 import { AuthTabParamList, AuthParamList} from '../types';
 
 const AuthTab = createStackNavigator<AuthTabParamList>();
 
 export default function AuthTabNavigator() {
  return (
     <AuthTab.Navigator
       initialRouteName="Login"
      >
       <AuthTab.Screen
         name="Login"
         component={LoginNavigator}
         options={{
           headerShown: false
          }}
       />
       <AuthTab.Screen
         name="SignUp"
         component={SignUpNavigator}
         options={{
           headerShown: false
          }}
       />
       <AuthTab.Screen
         name="Verify"
         component={VerifyNavigator}
         options={{
           headerShown: false
          }}
       />

     </AuthTab.Navigator>
   );
 }
 
 // Each tab has its own navigation stack, you can read more about this pattern here:
 // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
 const AuthStack = createStackNavigator<AuthParamList>();
 
 function LoginNavigator() {
   return (
     <AuthStack.Navigator>
       <AuthStack.Screen
         name="LoginScreen"
         component={LoginScreen}
         options={{
          headerShown: false
        }}
       />
     </AuthStack.Navigator>
   );
 }

 function SignUpNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
         headerShown: false
       }}
      />
    </AuthStack.Navigator>
  );
}

function VerifyNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="VerifyScreen"
        component={VerifyScreen}
        options={{
         headerShown: false
       }}
      />
    </AuthStack.Navigator>
  );
}

 