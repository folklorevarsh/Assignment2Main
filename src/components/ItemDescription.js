import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
  },
  addingButton: {
    marginVertical: 10,
    backgroundColor: '#5F47F5',
    padding: 10,
    borderRadius: 10,
  },
  addingButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },


  description: {
    fontSize: 16,
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#D335CC', 
    borderRadius: 10,
  },

});

const ItemDescription = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{String(item.title)}</Text>
      <Text style={styles.description}>{String(item.description)}</Text>
      <TouchableOpacity style={styles.addingButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.addingButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemDescription;
