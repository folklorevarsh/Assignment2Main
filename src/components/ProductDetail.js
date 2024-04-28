import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ProductDetail = ({ route }) => {
    const { productId } = route.params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProduct(res.data);
            })
            .catch((e) => console.log(e));
    }, [productId]);

    if (!product) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    return (
        <View>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
        </View>
    );
};

export default ProductDetail;