import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import MyTabs from './src/components/TabNavigation'; 
import FavouritesContextProvider from './src/components/context/favouritesContext';
import SplashScreen from './src/components/SplashScreen'; 
import { CartProvider } from './src/components/CartContext'; // import CartProvider

import type { PropsWithChildren } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // show splash screen for 5 seconds

    return () => clearTimeout(timer); // cleanup timer on unmount
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <FavouritesContextProvider>
          <CartProvider> {/* Wrap MyTabs with CartProvider */}
            <MyTabs />
          </CartProvider>
        </FavouritesContextProvider>
      )}
    </NavigationContainer>
  );
};

export default App;