import { createAction, props } from '@ngrx/store';
import { BookModel } from '../../models/book.model';

export const loadBooks = createAction(
    'loadBooks');

export const loadBooksSuccessfully = createAction(
    'loadBooksSuccessfully',
    props<{books: BookModel[]}>()
);

export const loadBooksWithErrors = createAction(
    'loadBooksWithErrors',
    props<{payload: any}>()
);