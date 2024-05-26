import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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
        alignContent: 'center',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    imageWrapper:{   
        flex: 1,
    },
    textWrapper: {
        flex: 1,
        marginVertical:5,
    },
    categoryChip:{
        padding: 10,
        backgroundColor: '#FCB845',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    chipText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleCategorySelect = (category) => {
        navigation.navigate('ProductCategories', { category });
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCategorySelect(item)}>
            <View style={styles.wrapper}>
                <View style ={styles.textWrapper}>
                    <Text style={styles.categoryChip}>{item}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Shopping App!</Text>
                <Text style={styles.subtitle}>Browse our products and start shopping.</Text>
                <Text style={styles.subtitle}>This App was developed by Srivarshini Venugopal</Text>
            </View>
            {loading ? (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            ) : null}
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

export default Categories;