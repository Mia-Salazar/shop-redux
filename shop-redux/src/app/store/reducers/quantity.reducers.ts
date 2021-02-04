import { createReducer, on } from '@ngrx/store';
import { addQuantity, eraseQuantity, removeAllQuantity } from '../actions/quantity.actions';

export const initialStateQuantity = 0;

const _quantityReducer = createReducer(
  initialStateQuantity,
  on(addQuantity, (state, {number}) => state + number),
  on(eraseQuantity, state => state - 1),
  on(removeAllQuantity, state => (initialStateQuantity))
)
 
export function quantityReducer(state: any, action: any) {
  return _quantityReducer(state, action);
}