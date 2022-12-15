import { Injectable } from '@nestjs/common';
import movieModel from './movies.model';
import { Movie } from './movies.types';

@Injectable()
export class MovieService {
    async getMovies() {
        return await movieModel.find();
    }
    async getMovieById(movieId: string) {
        return await movieModel.findOne({ _id: movieId });
    }
    async createMovie(body: Movie) {
        const movie = await movieModel.findOne({ name: body.name }, { name: 1 });
        if (movie) {
            throw new Error('movieAlreadyExists');
        }
        return await movieModel.create({
            name: body.name,
            genre: body.genre,
            category: body.category
        });
    }

    async deleteMovie(movieId: string) {
        const movie = await movieModel.findOne({ _id: movieId });
        if (!movie) {
            throw new Error('movieNotFound');
        }
        return await movieModel.deleteOne({ _id: movieId });
    }

    async updateMovies(movieId: String, body: Movie) {
        const movie = await movieModel.findOne({ _id: movieId }, { name: 1 });
        if (!movie) {
            throw new Error('movieNotFound');
        }
        return await movieModel.updateOne(
            { _id: movieId },
            {
                $set: {
                    name: body.name,
                    genre: body.genre,
                    category: body.category
                }
            }
        );
    }
}
