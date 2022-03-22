import {GenreResponseProps} from "../models/genre-response-props";
import {MovieProps} from "../models/movie-props";
import { Header } from "./Header";
import {MovieCard} from "./MovieCard";

interface Props {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({selectedGenre, movies}: Props) {
  return (
    <>
      <Header title={selectedGenre.title} ></Header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  );
}
