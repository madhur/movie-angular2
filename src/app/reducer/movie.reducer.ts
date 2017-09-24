import { genreType } from '../model/movie.model';
import { MoviesConstants } from '../movies.constants';
import { IAction } from '../model/IAction';
import { IReducer } from '../model/IReducer';
import { fromJS } from 'immutable';

const initialState = fromJS({
    movies: [],
    selected_movie: null,
    search_text: null,
    selected_genre: genreType.allGenres,
    filtered_movies: []
});

export const MoviesReducer: IReducer<any> = (state: any = initialState, action: IAction) => {

    switch (action.type) {
        case MoviesConstants.GET_MOVIES_LIST:
            return state.merge(fromJS({
                movies: action.payload,
                filtered_movies: action.payload
            }));

        case MoviesConstants.GET_MOVIE:
            return state.merge(fromJS({
                selected_movie: action.payload
            }));


        case MoviesConstants.SET_SEARCH_TEXT:
            return state.merge(fromJS({
                search_text: action.payload
            }));

        case MoviesConstants.SET_GENRE:
            return state.merge(fromJS({
                selected_genre: action.payload
            }));

        case MoviesConstants.FILTER_MOVIES:
            return state.merge(fromJS({
                filtered_movies: action.payload
            }));

        default:
            return state;

    }

};
