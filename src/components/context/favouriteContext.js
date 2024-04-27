import React, { createContext, useContext, useState, useMemo } from 'react';

const favoritesContext = createContext(null);

export const useFavoritesContext = () => {
  const context = useContext(favoritesContext);

  if (context === undefined) {
    throw new Error('FavoritesContext should be within FavoritesContextProvider');
  }

  return context;
}

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavoritesHandler = () => {};

  const value = useMemo(
    () => ({
    favorites,
    addToFavoritesHandler,
  }), 
  [favorites]
);

  return (
    <favoritesContext.Provider value={value}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;