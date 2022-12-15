import * as mongoose from 'mongoose';
import { MovieInterface } from './movies.interfaces';
const MovieSchema = new mongoose.Schema({
    name: String,
    genre: String,
    category: String,
    releaseDate: Date
});
export default mongoose.model<MovieInterface>('Movie', MovieSchema);
