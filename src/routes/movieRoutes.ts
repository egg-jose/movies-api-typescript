import * as express from 'express';
import { movieController } from '../controllers/movieController';

class MovieRoutes {
  private controller: movieController;
  public router: express.Router;

  constructor() {
    this.controller = new movieController();
    this.router = express.Router();

    this.router
      .route('/')
      .get(this.controller.getAllMovies)
      .post(this.controller.addMovie);
    this.router.route('/:id').get(this.controller.getMovieById);
  }
}

export default MovieRoutes;
