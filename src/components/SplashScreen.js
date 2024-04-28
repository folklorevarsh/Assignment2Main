import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import logo from './splash.jpg'; // Use relative path and no spaces

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 500, 
    height: 550, 
  },
  text: {
    color: '#7440D1',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  title: {
    color: '#D334CE',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#7440D1',
    fontSize: 20,
    alignItems: 'center',
  },
});

const SplashScreen = () => (
  <View style={styles.container}>
    <Image source={logo} style={styles.image} />
    <Text style={styles.text}>Fake Store!</Text>
    <Text style={styles.subtitle}>Browse our products and start shopping.</Text>
  </View>
);

export default SplashScreen;