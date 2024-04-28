import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import ItemDescription from './ItemDescription'; // Import the ItemDescription component
import Categories from './Categories';
import Favourites from './Favourites';

import ProductCategories from './ProductCategories';
import ItemDescriptionCategory from './ItemDescriptionCategory';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDescription" component={ItemDescription} />
      <Stack.Screen name="ProductCategories" component={ProductCategories} />
      <Stack.Screen name="ItemDescriptionCategory" component={ItemDescriptionCategory} />
    </Stack.Navigator>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
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
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 20 }}>🛒</Text>
          ),
        }}
      />


    </Tab.Navigator>
  );
}

export default MyTabs;