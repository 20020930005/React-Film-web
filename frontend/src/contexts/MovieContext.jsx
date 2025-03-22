import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

// ✅ Correct way to use useContext inside a function
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Check if there are any saved favorites in localStorage
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      try {
        // Try parsing the stored string to JSON
        setFavorites(JSON.parse(storedFavs));
      } catch (error) {
        console.error("Error parsing favorites from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Only save to localStorage if favorites have changed
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
