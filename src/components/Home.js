import React, { useEffect, useState } from 'react';
import { useFavoritesContext } from './context/favouritesContext';
import { TouchableOpacity,StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding:5,
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

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { favourites, addToFavoritesHandler } = useFavoritesContext();

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.wrapper}>
          <View style={styles.imageandButtonWrap}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain'/>
            </View>
            <View>
              <TouchableOpacity 
                style={styles.addingButton}
                onPress={() => addToFavoritesHandler(item)}
              >
                <Text style={styles.addingButtonText}>Add to Favourites</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>Price: ${item.price}</Text>
            <Text style={styles.text}>Description: {item.description}</Text>
            <Text style={styles.text}>Category: {item.category}</Text>
            <Text style={styles.text}>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text>
          </View>
        </View>
      );

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Shopping App!</Text>
                <Text style={styles.subtitle}>Browse our products and start shopping.</Text>
            </View>
            {loading ? (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            ) : null}
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Home;