/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './src/components/TabNavigation';
import FavouritesContextProvider from './src/components/context/favouritesContext';


import type {PropsWithChildren} from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <FavouritesContextProvider>
        <MyTabs />
      </FavouritesContextProvider>
    </NavigationContainer>
  );
};

export default App;
