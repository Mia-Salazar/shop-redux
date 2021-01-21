import { createReducer, on } from '@ngrx/store';
import { waiting, stopWaiting } from '../actions/ui.actions';

export interface StateWaiting {
    waiting: boolean;
}

export const initialState: StateWaiting = {
    waiting: false,
}

const _waitingReducer = createReducer(initialState,
    on(waiting, state => ({...state, waiting: true})),
    on(stopWaiting, state => ({...state, waiting: false}))

);

export function waitingReducer(state: any, action: any) {
    return _waitingReducer(state, action);
}