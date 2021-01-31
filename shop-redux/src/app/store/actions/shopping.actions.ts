  
import { createAction, props } from '@ngrx/store';
import { MovieModel } from 'src/app/models/movie.model';

export const add = createAction (
    'add',
    props<{ movie: MovieModel }>()
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