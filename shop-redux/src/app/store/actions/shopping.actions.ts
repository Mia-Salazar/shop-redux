  
import { createAction, props } from '@ngrx/store';

export const add = createAction (
    'add',
    props<{ _id: string }>()
);

export const erase = createAction (
    'erase',
    props<{ _id: string}>()
);