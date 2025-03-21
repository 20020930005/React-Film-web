
//if we use export function MovieCard("movie")
//when importing to app.jsx import {MovieCard} from---------- like that
function MovieCard({ movie }) {
  function favorieClick() {
    alert("clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie_overlay">
          <button className="favorie-btn" onClick={favorieClick}>🤍</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;  // ✅ Fix: Add default export
