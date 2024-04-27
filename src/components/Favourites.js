import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';

import { useFavoritesContext } from './context/favouritesContext';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 5,
        backgroundColor: '#ffffff',
    },
    noFavoritesView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 175,
        height: 175,

    },

    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
        borderWidth: 1,
        borderBottomColor: 'green',
        padding: 10,

    },

    imageandButtonWrap:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    addingButton:{
        marginVertical: 10,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
    },

    addingButtonText:{ 
        color: 'white',
        fontSize: 14,

    },

    imageWrapper:{   
        flex: 1,
    },

    textWrapper: {
        flex: 1,
        marginVertical:5,
    },
});

const Favorites = () => {
    const { favorites, removeFromFavoritesHandler } = useFavoritesContext();

    const renderItem = ({ item }) => (
        <View style={styles.wrapper}>
          <View style={styles.imageandButtonWrap}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain'/>
            </View>
            <View>
              <TouchableOpacity 
                style={styles.addingButton}
                onPress={() => removeFromFavoritesHandler(item)}
              >
                <Text style={styles.addingButtonText}>Remove Item</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>Price: ${item.price}</Text>
            <Text style={styles.text}>Category: {item.category}</Text>
            <Text style={styles.text}>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text>
          </View>
        </View>
      );

    return (
        <SafeAreaView style={styles.root}>
            {favorites.length > 0 ? (
                <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            ) : (
                <View style={styles.noFavoritesView}>
                    <Text>Favorites are empty! Please add..</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Favorites;