import {MoviesReducer} from '../reducer/movie.reducer';
import { combineReducers } from 'redux';


export default combineReducers({

    movies: MoviesReducer

});