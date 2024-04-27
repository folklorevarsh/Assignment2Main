import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import MyTabs from './src/components/TabNavigation'; // Make sure the path is correct
import FavouritesContextProvider from './src/components/context/favouritesContext';
import SplashScreen from './src/components/SplashScreen'; // Import your SplashScreen component

import type { PropsWithChildren } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // show splash screen for 3 seconds

    return () => clearTimeout(timer); // cleanup timer on unmount
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <FavouritesContextProvider>
          <MyTabs />
        </FavouritesContextProvider>
      )}
    </NavigationContainer>
  );
};

export default App;