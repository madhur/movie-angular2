import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {movies} from '../model/movie.mock-data';

@Injectable()
export class MovieService {

    getMovieDetail(movieKey) {
        let movie = movies.find( x => movieKey === x.key );
        if ( movie === -1 ) {
            return null;
        } else {
            return Observable.of(movie);
        }
    };

    getMoviesList() {
        return Observable.of(movies);
    }
};
