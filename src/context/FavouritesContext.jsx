import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState([]);

    const toggleFavourite = (property) => {
        if (favourites.some(fav => fav.id === property.id)) {
            setFavourites(favourites.filter(fav => fav.id !== property.id));
        } else {
            setFavourites([...favourites, property]);
        }
    };

    const clearFavourites = () => {
        setFavourites([]);
    };

    return (
        <FavouritesContext.Provider value={{ favourites, toggleFavourite, clearFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
}

export function useFavourites() {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourites must be used within a FavouritesProvider');
    }
    return context;
}
