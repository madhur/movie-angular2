import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {movies} from '../model/movie.mock-data';

@Injectable()
export class MovieService {

    getMovieDetail(id) {
        let movie = movies.find( x => id === x );
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
