import { ActionReducerMap } from '@ngrx/store';
import { waitingReducer, StateWaiting } from './reducers/ui.reducers';
import { shoppingReducer } from './reducers/shopping.reducers';
import { MovieModel } from '../models/movie.model';

export interface AppState {
    waiting: StateWaiting,
    shopping: MovieModel[]
}

export const appReducers: ActionReducerMap<AppState> = {
    waiting: waitingReducer,
    shopping: shoppingReducer
}