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
  }, 
  [favorites],
);

  const value = useMemo(
    () => ({
      favorites,
      addToFavoritesHandler,
      removeFromFavoritesHandler,
    }), 
    [favorites, addToFavoritesHandler, removeFromFavoritesHandler]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;