import * as express from 'express';
import MovieRoutes from './routes/movieRoutes';
import bodyParser = require('body-parser');

class App {
  public app: express.Application;
  public routesMovies: MovieRoutes;

  constructor() {
    this.app = express();

    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

		this.routesMovies = new MovieRoutes();
		this.app.use('/movie', this.routesMovies.router)
  }
}

export default new App().app;
