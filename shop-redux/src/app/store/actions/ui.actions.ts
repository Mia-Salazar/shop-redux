import { createAction } from '@ngrx/store';

export const waiting = createAction('waiting');
export const stopWaiting = createAction('stopWaiting');