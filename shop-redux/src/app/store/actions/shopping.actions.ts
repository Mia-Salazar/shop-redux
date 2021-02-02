  
import { createAction, props } from '@ngrx/store';
import { MovieModel } from 'src/app/models/movie.model';

export const add = createAction (
    'add',
    props<{ movie: MovieModel }>()
);

export const addMore = createAction (
    'addMore',
    props<{ _id: string, quantity: number }>()
);

export const erase = createAction (
    'erase',
    props<{ _id: string}>()
);

//Using just the ID in the store
// export const add = createAction (
//     'add',
//     props<{ _id: string }>()
// );

// export const erase = createAction (
//     'erase',
//     props<{ _id: string}>()
// );