import { ActionReducerMap } from '@ngrx/store';

import { waitingReducer, StateWaiting } from './reducers/ui.reducers';
import { shoppingReducer } from './reducers/shopping.reducers';
import { BookReducers, StateBook } from './reducers/books.reducers';
import { MovieModel } from '../models/movie.model';
import { quantityReducer } from './reducers/quantity.reducers';

export interface AppState {
    waiting: StateWaiting,
    shopping: MovieModel[],
    books: StateBook,
    quantity: number
}

export const appReducers: ActionReducerMap<AppState> = {
    waiting: waitingReducer,
    shopping: shoppingReducer,
    books: BookReducers,
    quantity: quantityReducer
}