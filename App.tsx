import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/components/TabNavigation'; 
import FavouritesContextProvider from './src/components/context/favouritesContext';
import SplashScreen from './src/components/SplashScreen'; 
import Login from './src/components/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfile from './src/components/UserProfile';

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const clearToken = async () => {
      await AsyncStorage.removeItem('userToken');
    };
  
    clearToken();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // show splash screen for 5 seconds

    return () => clearTimeout(timer); // cleanup timer on unmount
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {token ? (
        <FavouritesContextProvider>
          <MyTabs />
        </FavouritesContextProvider>
      ) : (
        <Login setToken={setToken} />
      )}
    </NavigationContainer>
  );
};

export default App;