import { createReducer, on } from '@ngrx/store';
import { MovieModel } from 'src/app/models/movie.model';
import { add, erase } from '../actions/shopping.actions';

export const initialState: MovieModel[] = [];

const _shoppingReducer = createReducer(initialState,
  on(add, (state, {name, _id, price} )=> ({...state, movie: [...name, _id, price]})),
  on(erase, (state, {_id}) => state.filter (el => el._id !== _id)),
);


// Saving just the ID in the store
// export const initialState: MovieModel[] = [];
// const _shoppingReducer = createReducer(
//   initialState,
//   on(add, (state, {_id}) => [...state, new MovieModel(_id)]),
//   on(erase, (state, {_id}) => state.filter (el => el._id !== _id)),
// )
 
export function shoppingReducer(state: any, action: any) {
  return _shoppingReducer(state, action);
}