import { MoviesConstants } from '../movies.constants';
import { IAction } from '../model/IAction';
import { IReducer } from '../model/IReducer';
import { fromJS } from 'immutable';

const initialState = fromJS({
    movies: [],
    selected_movie: null,
    filtered_movies: [],
    search_text: null
});

export const MoviesReducer: IReducer<any> = (state: any = initialState, action: IAction) => {

    switch (action.type) {
        case MoviesConstants.GET_MOVIES_LIST:
            return state.merge(fromJS({
                movies: action.payload
            }));

        case MoviesConstants.GET_MOVIE:
            return state.merge(fromJS({
                selected_movie: action.payload
            }));

        case MoviesConstants.SEARCH_MOVIE:
            return state.merge(fromJS({
                search_text: action.payload
            }));

        default:
            return state;

    }

};
