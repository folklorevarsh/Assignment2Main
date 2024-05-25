import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    backgroundColor: '#ffeef5',
  },
  box: {
    width: 300,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    backgroundColor: '#935585',
  },
  mainTitle: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
  },
  label: {
    marginBottom: 10,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddcf0a',
    borderRadius: 5,
  },
  submit: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#935585',
  },
  submitText: {
    color: 'white',
    textAlign: 'center',
  },
});

const Order = ({ id, items, total }) => (
  <View style={styles.box}>
    <Text style={styles.label}>Order ID: {id}</Text>
    <Text style={styles.label}>Items: {items}</Text>
    <Text style={styles.label}>Total: {total}</Text>
    <Button title="Details" onPress={() => {}} />
  </View>
);

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>My Orders</Text>
      <View>
        <Text style={styles.title}>New Orders</Text>
        <Order id="1" items="3" total="$100" />
      </View>
      <View>
        <Text style={styles.title}>Paid Orders</Text>
        <Order id="2" items="2" total="$50" />
      </View>
      <View>
        <Text style={styles.title}>Delivered Orders</Text>
        <Order id="3" items="1" total="$30" />
      </View>
    </View>
  );
};

export default Orders;