import { MovieService } from '../service/movie.service';
import { Injectable } from '@angular/core';
import { MoviesConstants } from '../movies.constants';
import { IActionCreator } from '../model/IAction';

@Injectable()
export class MovieActions {

    constructor(private moviesService: MovieService) {

    }


    private getMoviesList: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.GET_MOVIES_LIST,
            payload: data
        };
    }

    private setSearchText: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.SET_SEARCH_TEXT,
            payload: data
        };
    }

    private setSelectedGenre: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.SET_GENRE,
            payload: data
        };
    }

    private filterMovies: IActionCreator = (data: any) => {

        return {
            type: MoviesConstants.FILTER_MOVIES,
            payload: data
        };
    }

    private getMovie: IActionCreator = (data: any) => {

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

    searchMovieByName(searchText) {
        return (dispatch) => {
            dispatch(this.setSearchText(searchText));
            dispatch(this.searchAndFilterMovies());
        };
    }

    private searchAndFilterMovies() {
        return (dispatch, getState) => {
            let { movies_app } = getState();
            let genre = movies_app.getIn(['selected_genre']);
            let searchText = movies_app.getIn(['search_text']);

            this.moviesService.filterAndSearchMovies(genre, searchText)
                .subscribe(res => {
                    dispatch(this.filterMovies(res));
                }, err => {
                    console.log(err);
                });
        };
    }

    filterMoviesByGenre(genre) {
        return (dispatch) => {
            dispatch(this.setSelectedGenre(genre));
            dispatch(this.searchAndFilterMovies());
        };
    }

    getMovieByKey(movieKey) {
        return (dispatch) => {
            this.moviesService.getMovieDetail(movieKey)
                .subscribe(res => {
                    dispatch(this.getMovie(res));
                }, err => {
                    console.log(err);
                });
        };
    }
}
