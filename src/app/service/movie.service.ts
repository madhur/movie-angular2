import { genreType } from '../model/movie.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { movies } from '../model/movie.mock-data';

@Injectable()
export class MovieService {

    getMovieDetail(movieKey) {
        let movie = movies.find(x => movieKey === x.key);
        if (movie === -1) {
            return null;
        } else {
            return Observable.of(movie);
        }
    };

    getMoviesList() {
        return Observable.of(movies);
    }

    filterAndSearchMovies(genre, searchText) {
        let filteredMovies = movies.filter(function (movie) {
            if (searchText && searchText.trim().length > 0) {
                if (movie.name.toLowerCase().includes(searchText.toLowerCase())) {
                    if (genre === genreType.allGenres) {
                        return true;
                    } else if (movie.genres.includes(genre)) {
                        return true;
                    }

                    return false;
                } else {
                    return false;
                }
            } else {
                if (genre === genreType.allGenres) {
                    return true;
                } else if (movie.genres.includes(genre)) {
                    return true;
                }
                return false;
            }
        });

        return Observable.of(filteredMovies);
    }
};
