import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useFavoritesContext } from './context/favouritesContext';

const styles = StyleSheet.create({
    root: {
      flex: 1,
      padding: 5,
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: 'gray',
    },
    activityIndicatorContainer: {
      position: 'absolute',
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
      borderBottomColor: 'purple',
      borderTopColor: 'purple',
      borderRightColor: 'purple',
      borderLeftColor: 'purple',
      padding: 10,
    },
    imageandButtonWrap: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    addingButton: {
      marginVertical: 10,
      backgroundColor: '#D334CC',
      padding: 10,
      borderRadius: 10,
    },
    viewingButton: {
      marginVertical: 10,
      backgroundColor: '#5F47F5',
      padding: 10,
      borderRadius: 10,
    },
    viewingButtonText: {
      color: 'white',
      fontSize: 14,
      alignItems: 'center',
    },
    addingButtonText: {
      color: 'white',
      fontSize: 14,
      alignItems: 'center',
    },
    imageWrapper: {
      flex: 1,
    },
    textWrapper: {
      flex: 1,
      marginVertical: 5,
    },

    backButton: {
        marginVertical: 5,
        backgroundColor: '#5F47F5',
        padding: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 14,
        alignItems: 'center',
      },
  });

  const ProductCategories = ({ route, navigation }) => {
    const { category } = route.params;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { addToFavoritesHandler } = useFavoritesContext();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setLoading(false);
            });
    }, [category]);

    const renderItem = ({ item }) => (
        <View style={styles.wrapper}>
            <View style={styles.imageandButtonWrap}>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.addingButton}
                        onPress={() => addToFavoritesHandler(item)}
                    >
                        <Text style={styles.addingButtonText}>🛒 Add to Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.viewingButton}
                        onPress={() => navigation.navigate('ItemDescriptionCategory', { item })}
                    >
                        <Text style={styles.viewingButtonText}>🔎 Description</Text>
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
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Categories')}
            >
                <Text style={styles.backButton}>⬅️ Back to Categories</Text>
            </TouchableOpacity>
            {loading ? (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};

export default ProductCategories;