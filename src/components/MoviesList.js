import PropTypes from "prop-types";

import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => {
        return (
          <div key={movie.imdbID} className="movie-item">
            <Movie
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          </div>
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
