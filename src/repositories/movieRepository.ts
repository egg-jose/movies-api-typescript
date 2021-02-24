import { connection } from '../config/connection';
import Movie from '../entities/Movie';
import movieInterface from '../helpers/movieInterface';

class MovieRepository {
  getAllMovies() {
    return connection
      .then(async connection => {
        const allMovies: Movie[] = await connection.manager.find(Movie);
        return allMovies;
      })
      .catch(error => {
        throw new Error(`Error  ${error}`);
      });
  }
  getMovie(id: number) {
    return connection
      .then(async connection => {
        const movie = await connection.manager.findOne(Movie, id);
        return movie;
      })
      .catch(error => {
        throw new Error(`Error  ${error}`);
      });
  }
  addMovie(requestMovie: movieInterface) {
    return connection
      .then(async connection => {
        const movie = new Movie();
        movie.name = requestMovie.name;
        movie.actors = requestMovie.actors;
        movie.director = requestMovie.director;
        movie.durationTime = requestMovie.durationTime;
        movie.name = requestMovie.name;

        const newMovie = await connection.manager.save(movie);
        return newMovie;
      })
      .catch(error => {
        throw new Error(`Error  ${error}`);
      });
  }
}
export default MovieRepository;
