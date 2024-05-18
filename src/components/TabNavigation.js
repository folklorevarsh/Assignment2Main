import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import ItemDescription from './ItemDescription'; // Import the ItemDescription component
import Categories from './Categories';
import Favourites from './Favourites';
import UserProfile from './UserProfile';

import ProductCategories from './ProductCategories';
import ItemDescriptionCategory from './ItemDescriptionCategory';

import { useFavoritesContext } from './context/favouritesContext';


import { useSelector } from 'react-redux';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDescription" component={ItemDescription} />
      <Stack.Screen name="ProductCategories" component={ProductCategories} />
      <Stack.Screen name="ItemDescriptionCategory" component={ItemDescriptionCategory} />
      <Tab.Screen name="Profile" children={() => <UserProfile onSignOut={yourSignOutFunction} getUser={getUser} />} />
    </Stack.Navigator>
  );
}

const MyTabs = () => {

  
  const { favorites } = useFavoritesContext();

  console.log(favorites);

  return (
    <Tab.Navigator
      key={favorites.length}
      initialRouteName="Products"
      activeColor="#ffffff"
      barStyle={{ backgroundColor: '#FCB845' }}
      
    >
      <Tab.Screen
        name="Products"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 20 }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 20 }}>📁</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Favourites}
        options={{
          tabBarLabel: `Cart`,
          tabBarIcon: ({ color }) => (
            <Text style={{ color: 'orange', fontSize: 14 }}>🛒{favorites.length}</Text>
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarLabel: `Profile`,
          tabBarIcon: ({ color }) => (
            <Text style={{ color: 'orange', fontSize: 14 }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
