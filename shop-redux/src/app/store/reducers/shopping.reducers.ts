import { createReducer, on } from '@ngrx/store';
import { MovieModel } from 'src/app/models/movie.model';
import { add, reduce, addMore, removeAll, deleteItem } from '../actions/shopping.actions';

export const initialState: MovieModel[] = [];

const _shoppingReducer = createReducer(
  initialState,
  on(add, (state, {movie}) => [...state, new MovieModel(movie._id, movie.name, movie.runtimeInMinutes, movie.quantity)]),
  on(reduce, (state, {_id, number}) => {
    return state.map (el => {
      if (el._id === _id){
        return {...el, quantity: number}
      }
      return el;
    })
  }),
  on(deleteItem, (state, {_id}) => state.filter (el => el._id !== _id)),
  on(addMore, (state, {_id, quantity}) => {
    return state.map (movie => {
      if (movie._id === _id){
        return {...movie, quantity: quantity}
      } else {
        return movie;
      }
    })
  }),
  on(removeAll, state => (initialState))
)

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

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