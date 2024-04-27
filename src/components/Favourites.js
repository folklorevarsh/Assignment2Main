import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList, Image, Alert } from 'react-native';
import axios from 'axios';

import { useFavoritesContext } from './context/favouriteContext';  


const styles = StyleSheet.create({
    // Existing styles...

    // Add any additional styles specific to the favorites page here
    favoriteItem: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
});

const Favourites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    const {favourites} = useFavoritesContext();
    

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
                setFavorites(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.favoriteItem}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>My Favorites</Text>
            </View>
            {loading ? (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            ) : null}
            <FlatList
                data={favorites}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Favourites;
