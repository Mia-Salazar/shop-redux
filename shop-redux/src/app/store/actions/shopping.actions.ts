  
import { createAction, props } from '@ngrx/store';
import { MovieModel } from 'src/app/models/movie.model';

export const add = createAction (
    'add',
    props<{ _id: string, name: string, price: number }>()
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