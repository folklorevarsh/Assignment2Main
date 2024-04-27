import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';


const styles = StyleSheet.create({
    root: {
        flex: 1,
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
});

const Home = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Shopping App!</Text>
                <Text style={styles.subtitle}>Browse our products and start shopping.</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;