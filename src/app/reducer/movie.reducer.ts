import { IAction } from '../model/IAction';
import { IReducer } from '../model/IReducer';
import { fromJS } from 'immutable';

const initialState = fromJS({
    movies: []
});

export const MoviesReducer: IReducer<any> = (state: any = initialState, action: IAction) => {
    
};
