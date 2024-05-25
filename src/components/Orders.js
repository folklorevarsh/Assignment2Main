import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

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
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10,
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

const Order = ({ id, items, total }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <View style={styles.box}>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.label}>Order ID: {id}</Text>
            <Text>{isExpanded ? 'Hide Details' : 'Show Details'}</Text>
          </View>
          {isExpanded && (
            <>
              <Text style={styles.label}>Items: {items}</Text>
              <Text style={styles.label}>Total: {total}</Text>
            </>
          )}
        </TouchableOpacity>
        <Button title="Details" onPress={() => {}} />
      </View>
    );
  };
  
  const Orders = () => {
    const [isExpandedNew, setIsExpandedNew] = useState(false);
    const [isExpandedPaid, setIsExpandedPaid] = useState(false);
    const [isExpandedDelivered, setIsExpandedDelivered] = useState(false);
  
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>My Orders</Text>
        <TouchableOpacity onPress={() => setIsExpandedNew(!isExpandedNew)}>
          <Text style={styles.title}>New Orders</Text>
          {isExpandedNew && <Order id="1" items="3" total="$100" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsExpandedPaid(!isExpandedPaid)}>
          <Text style={styles.title}>Paid Orders</Text>
          {isExpandedPaid && <Order id="2" items="2" total="$50" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsExpandedDelivered(!isExpandedDelivered)}>
          <Text style={styles.title}>Delivered Orders</Text>
          {isExpandedDelivered && <Order id="3" items="1" total="$30" />}
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Orders;