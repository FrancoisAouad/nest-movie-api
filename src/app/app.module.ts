import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from '../movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { MovieController } from 'src/movies/movies.controller';
import { MovieService } from 'src/movies/movies.service';

@Module({
    imports: [ConfigModule.forRoot({ envFilePath: '.env' }), MovieModule],
    controllers: [AppController, MovieController],
    providers: [AppService, MovieService]
})
export class AppModule {}
