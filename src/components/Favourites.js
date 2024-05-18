import React from 'react';
import { Image, StyleSheet, View, Button, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
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
    borderBottomColor: 'purple',
    padding: 10,
  },
  imageandButtonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addingButton: {
    marginVertical: 5,
    backgroundColor: 'purple',
    padding: 5,
    borderRadius: 5,
  },
  addingQuantity: {
    marginVertical: 5,
    backgroundColor: '#e181dd',
    padding: 5,
    borderRadius: 5,
  },
  addingButtonText: {
    color: 'white',
    fontSize: 16,
  },
  imageWrapper: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    marginVertical: 5,
  },
  emptyCartText: {
    fontSize: 18,
    color: 'purple',
    fontStyle: 'bold',
  },

  CheckOutButton: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'bold',
    align: 'center'
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

    backButton2: {
        marginVertical: 5,
        backgroundColor: '#ffbc44',
        padding: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 14,
        alignItems: 'center',
        },

});


const Favorites = () => {
  const { favorites, removeFromFavoritesHandler, reduceItemCountHandler, addToFavoritesHandler, clearFavorites } = useFavoritesContext();

  const renderItem = ({ item }) => (
    <View style={styles.wrapper}>
      <View style={styles.imageandButtonWrap}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
        </View>
        <View>
          <TouchableOpacity
            style={styles.addingButton}
            onPress={() => removeFromFavoritesHandler(item)}
          >
            <Text style={styles.addingButtonText}>Remove Item</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.addingButton}
            onPress={() => reduceItemCountHandler(item)}
          >
            <Text style={styles.addingButtonText}>➖</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.addingQuantity}
            onPress={() => addToFavoritesHandler(item)}
          >
            <Text style={styles.addingButtonText}>➕</Text>
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
      <View style={styles.backButton}>
        <Text style={styles.addingButtonText}>
          Total items in cart: {favorites.length}
        </Text>
      </View>
      <View style={styles.backButton2}>
        <Text style={styles.addingButtonText}>
        💸Cart Subtotal: ${favorites.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </Text>
      </View>
      {favorites.length > 0 ? (
        <>
          <FlatList
            data={favorites}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity 
            style={styles.addingQuantity}
            onPress={clearFavorites}
          >
            <Text style={styles.addingButtonText}>Checkout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.noFavoritesView}>
          <Text style={styles.emptyCartText}>Your cart is empty! Please add products 🛍️ </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorites;



/*

const Favorites = () => {
  const { favorites, removeFromFavoritesHandler, reduceItemCountHandler, addToFavoritesHandler } = useFavoritesContext();

  const renderItem = ({ item }) => (
    <View style={styles.wrapper}>
      <View style={styles.imageandButtonWrap}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
        </View>
        <View>
          <TouchableOpacity
            style={styles.addingButton}
            onPress={() => removeFromFavoritesHandler(item)}
          >
            <Text style={styles.addingButtonText}>Remove Item</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.addingButton}
            onPress={() => reduceItemCountHandler(item)}
          >
            <Text style={styles.addingButtonText}>➖</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.addingQuantity}
            onPress={() => addToFavoritesHandler(item)}
          >
            <Text style={styles.addingButtonText}>➕</Text>
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
      <View style={styles.backButton}>
        <Text style={styles.addingButtonText}>
          Total items in cart: {favorites.length}
        </Text>
      </View>
      <View style={styles.backButton2}>
        <Text style={styles.addingButtonText}>
        💸Cart Subtotal: ${favorites.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </Text>
      </View>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.noFavoritesView}>
          <Text style={styles.emptyCartText}>Your cart is empty! Please add products 🛍️ </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorites;
*/