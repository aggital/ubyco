import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ImageBrowser from '../screens/ImageBrowser';
import { RootStackParamList } from '../types';
import AuthTabNavigator from './AuthTabNavigator';
import DrawerTabNavigator from './DrawerTabNavigator'
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen 
        name="Auth"
        component={AuthTabNavigator}
      />
      <Stack.Screen 
        name="Root" 
        component={DrawerTabNavigator}
      />
      <Stack.Screen name="ImageBrowser" 
      component={ImageBrowser}  
      />
    </Stack.Navigator>
  );
}
