import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  // ✅ Handle empty favorites correctly
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h1>Your Favorites</h1>
        <p>No movies added yet. Your favorite movies will appear here.</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Favorites;

