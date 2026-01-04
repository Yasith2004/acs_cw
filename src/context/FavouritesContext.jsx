import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

/**
 * FavouritesProvider component uses the Context API to manage the collection of 
 * favourite properties across the application. It provides state and functions
 * for toggling and clearing favourites.
 */
export function FavouritesProvider({ children }) {
    // State to store the list of properties marked as favourites
    const [favourites, setFavourites] = useState([]);

    /**
     * Toggles a property's presence in the favourites list.
     * If the property is already a favourite, it is removed; otherwise, it is added.
     * 
     * @param {Object} property - The property object to toggle.
     */
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
