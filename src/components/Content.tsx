import {GenreResponseProps} from "../models/genre-response-props";
import {MovieProps} from "../models/movie-props";
import {Header} from "./Header";
import { MoviesList } from "./MoviesList";

interface Props {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({selectedGenre, movies}: Props) {
  return (
    <>
      <Header title={selectedGenre.title}></Header>

      <main>
        <MoviesList movies={movies}></MoviesList>
      </main>
    </>
  );
}
