import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { Alert } from 'react-native';

const FavoritesContext = createContext(null);

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error('FavoritesContext should be within FavoritesContextProvider');
  }

  return context;
}

const FavoritesContextProvider = ({ children }) => {
  
  const clearFavorites = useCallback(() => {
    setFavorites([]);
    Alert.alert('Success', 'A new order has been created.');
  }, []);

  const [favorites, setFavorites] = useState([]);

  const addToFavoritesHandler = useCallback((item) => {
    const oldFavourites = [...favorites];
    const newFavourites = oldFavourites.concat(item);
    setFavorites(newFavourites);
  }, [favorites]);

  const removeFromFavoritesHandler = useCallback((item) => {
    const oldFavourites = [...favorites];
    const newFavorites = oldFavourites.filter(loopItem => loopItem.id !== item.id);
    setFavorites(newFavorites);
  }, [favorites]);

  const reduceItemCountHandler = useCallback((item) => {
    const oldFavorites = [...favorites];
    const itemIndex = oldFavorites.findIndex(loopItem => loopItem.id === item.id);

    if (itemIndex !== -1) {
      if (oldFavorites[itemIndex].quantity > 1) {
        oldFavorites[itemIndex].quantity -= 1;
      } else {
        oldFavorites.splice(itemIndex, 1);
      }
      setFavorites(oldFavorites);
    }
  }, [favorites]);

  
  const increaseItemCountHandler = useCallback((item) => {
    setFavorites((oldFavorites) => {
      const itemIndex = oldFavorites.findIndex(loopItem => loopItem.id === item.id);
  
      if (itemIndex !== -1) {
        // If the item is in the favorites, increase its quantity by 1
        const updatedFavorites = [...oldFavorites];
        updatedFavorites[itemIndex] = { ...updatedFavorites[itemIndex], quantity: updatedFavorites[itemIndex].quantity + 1 };
        return updatedFavorites;
      } else {
        // If the item is not in the favorites, add it with a quantity of 1
        return [...oldFavorites, { ...item, quantity: 1 }];
      }
    });
  }, []);
  
  const value = useMemo(() => ({
    favorites,
    addToFavoritesHandler,
    removeFromFavoritesHandler,
    reduceItemCountHandler,
    clearFavorites,
    increaseItemCountHandler
  }), [favorites, addToFavoritesHandler,clearFavorites, removeFromFavoritesHandler, reduceItemCountHandler, increaseItemCountHandler]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;