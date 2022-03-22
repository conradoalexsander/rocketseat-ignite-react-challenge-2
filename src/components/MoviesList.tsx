import { MovieProps } from "../models/movie-props";
import { MovieCard } from "./MovieCard";

interface MoviesListProps {
    movies: MovieProps[];
  }
  
export function MoviesList(props : MoviesListProps) {
    return (
      <div className="movies-list">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    );
  }