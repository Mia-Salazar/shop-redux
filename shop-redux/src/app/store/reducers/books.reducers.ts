import { createReducer, on } from '@ngrx/store';
import { loadBooks, loadBooksSuccessfully, loadBooksWithErrors } from '../actions/books.actions';
import { BookModel } from '../../models/book.model';

export interface StateBook {
    book: BookModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: StateBook = {
    book: [],
    loaded: false,
    loading: false,
    error: null,
}

const _BookReducers = createReducer(initialState,
    on(loadBooks, state => ({...state, loading: true})),
    on(loadBooksSuccessfully, (state, {books} )=> ({...state, loaded: true, loading: false, books: [...books]})),
    on(loadBooksWithErrors, (state, {payload} )=> ({...state, loaded: false, loading: false, error: payload}))
);

export function BookReducers(state: any, action: any) {
    return _BookReducers(state, action);
}