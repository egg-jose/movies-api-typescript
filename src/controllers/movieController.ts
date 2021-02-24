import { Request, Response } from 'express';
import MovieRepository from '../repositories/movieRepository';
import Joi from 'joi';

import { httpCodes } from '../helpers/httpCodes';

class movieController {
  movieRepository: MovieRepository;
  constructor() {
    this.movieRepository = new MovieRepository();
  }
  validateData(data) {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string(),
      director: Joi.string(),
      releaseDate: Joi.date(),
      durationTime: Joi.string(),
      actors: Joi.array().items(Joi.string()),
      rate: Joi.number(),
    }).validate(data);
  }
  public async getAllMovies(req: Request, res: Response) {
    try {
      const result = await this.movieRepository.getAllMovies();
      if (!result) {
        return res.status(httpCodes.NOT_FOUND).send({ error: 'No found' });
      }
      return res.status(httpCodes.ACCEPTED).send(result);
    } catch (error) {
      return res
        .status(httpCodes.SERVER_ERROR)
        .send({ error: `Internal server error ${error}` });
    }
  }

  public async addMovie(req: Request, res: Response) {
    const { error } = this.validateData(req.body);
    if (error)
      return res.status(httpCodes.BAD_REQUEST).send(error.details[0].message);
    try {
      const result = await this.movieRepository.addMovie(req.body);
      if (!result) {
        return res.status(httpCodes.NOT_ACCEPTABLE).send;
      }
    } catch (error) {
      return res
        .status(httpCodes.SERVER_ERROR)
        .send({ error: `Internal server error ${error}` });
    }
  }

  public async getMovieById(req: Request, res: Response) {
    const { error } = this.validateData(req.body);
    if (error)
      return res.status(httpCodes.BAD_REQUEST).send(error.details[0].message);
    try {
      const result = await this.movieRepository.getMovie(req.body.id);
      if (!result) {
        return res.status(httpCodes.NOT_FOUND).send({ error: 'No found' });
      }
      return res.status(httpCodes.ACCEPTED).send(result);
    } catch (error) {
      return res
        .status(httpCodes.SERVER_ERROR)
        .send({ error: `Internal server error ${error}` });
    }
  }
}

export { movieController };
