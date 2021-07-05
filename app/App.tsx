import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider as AuthProvider} from './context/AuthContext'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation colorScheme={colorScheme}/>
        </AuthProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  // }
}
