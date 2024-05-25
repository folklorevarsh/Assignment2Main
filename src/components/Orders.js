import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FavoritesContext } from 'favouritesContext.js'// Import the context

const Orders = () => {
    const { CheckoutArray } = useContext(FavoritesContext); // Access CheckoutArray from context
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(CheckoutArray);
    }, [CheckoutArray]);

    return (
        <View>
            {orders.map((order, index) => (
                <View key={index}>
                    <Text>Order {index + 1}</Text>
                    {order.map((item, itemIndex) => (
                        <Text key={itemIndex}>{item}</Text>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default Orders;