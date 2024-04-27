import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Shopping App!</Text>
  </View>
);

export default SplashScreen;