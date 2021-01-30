import { ActionReducerMap } from '@ngrx/store';

import { waitingReducer, StateWaiting } from './reducers/ui.reducers';
import { shoppingReducer } from './reducers/shopping.reducers';
import { BookReducers, StateBook } from './reducers/books.reducers';
import { MovieModel } from '../models/movie.model';
import { BookModel } from '../models/book.model';

export interface AppState {
    waiting: StateWaiting,
    shopping: MovieModel[],
    books: StateBook
}

export const appReducers: ActionReducerMap<AppState> = {
    waiting: waitingReducer,
    shopping: shoppingReducer,
    books: BookReducers
}