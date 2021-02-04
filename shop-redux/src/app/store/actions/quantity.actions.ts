  
import { createAction, props } from '@ngrx/store';

export const addQuantity = createAction (
    'addQuantity',
    props<{ number: number }>()
);

export const eraseQuantity = createAction (
    'eraseQuantity',
);

export const removeAllQuantity = createAction(
    'removeAllQuantity');