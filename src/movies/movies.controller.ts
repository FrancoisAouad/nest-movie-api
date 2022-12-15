import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Header } from '@nestjs/common';
import { MovieService } from './movies.service';
import { Movie } from './movies.types';

@Controller()
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get('/movie')
    async getMovies() {
        try {
            return await this.movieService.getMovies();
        } catch (e) {
            console.log(e);
        }
    }

    @Get('/movie/:movieId')
    async getMovieById(@Param('movieId') movieId) {
        try {
            return await this.movieService.getMovieById(movieId);
        } catch (e) {
            console.log(e);
        }
    }

    @Post('/movie')
    async createMovie(@Body() movieId: Movie) {
        try {
            return await this.movieService.createMovie(movieId);
        } catch (e) {
            console.log(e);
        }
    }
}
