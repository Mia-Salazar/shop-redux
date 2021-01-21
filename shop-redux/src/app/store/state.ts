import { ActionReducerMap } from '@ngrx/store';
import * as waiting from './reducers/ui.reducers';

export interface AppState {
    waiting: waiting.StateWaiting
}

export const appReducers: ActionReducerMap<AppState> = {
    waiting: waiting.waitingReducer
}