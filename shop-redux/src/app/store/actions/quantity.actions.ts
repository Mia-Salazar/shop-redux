  
import { createAction, props } from '@ngrx/store';

export const addQuantity = createAction (
    'addQuantity',
    props<{ number: number }>()
);

export const eraseQuantity = createAction (
    'eraseQuantity',
    props<{ number: number }>()
);

export const removeAllQuantity = createAction(
    'removeAllQuantity');