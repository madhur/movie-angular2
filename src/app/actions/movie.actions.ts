import { MovieService } from '../service/movie.service';
import { Injectable } from '@angular/core';
import { MoviesConstants } from '../movies.constants';
import { IActionCreator } from '../model/IAction';

@Injectable()
export class MovieActions {

    constructor(private moviesService: MovieService) {

    }


    getMoviesList: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.GET_MOVIES_LIST,
            payload: data
        };
    }

    setSearchText: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.SEARCH_MOVIE,
            payload: data
        };
    }

    getMovie: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.GET_MOVIE,
            payload: data
        };
    }


    getMovies() {

        return (dispatch) => {
            this.moviesService.getMoviesList()
                .subscribe(res => {
                    dispatch(this.getMoviesList(res));
                }, err => {
                    console.log(err);
                });
        };
    }
}
