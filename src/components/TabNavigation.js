import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './Home';
import Categories from './Categories';
import Favourites from './Favourites'; // Don't forget to import the Favourites component

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      activeColor="#ffffff"
      barStyle={{ backgroundColor: 'green' }}
    >
      <Tab.Screen
        name="Products"
        component={Home}
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
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color }) => (
            <Text style={{ color: color, fontSize: 20 }}>❤️</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;