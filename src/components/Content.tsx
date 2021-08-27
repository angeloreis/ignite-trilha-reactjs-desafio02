import { MovieCard } from './MovieCard'
import { Movie } from '../services/types'

import '../styles/content.scss';
interface ContentProps {
  movies: Movie[]
}

export function Content({ movies }: ContentProps) {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  );
}