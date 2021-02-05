import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { CartItemModel } from 'src/app/models/cartItem.model';
import { eraseQuantity, addQuantity } from 'src/app/store/actions/quantity.actions';
import { deleteItem, reduce, addMore} from 'src/app/store/actions/shopping.actions';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItemModel;
  total: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.total = this.item.runtimeInMinutes * this.item.quantity;
  }

  oneLess() {
    let finalQuantity = this.item.quantity - 1;
    if (finalQuantity === 0) {
      this.eraseAll();
    } else {
      this.store.dispatch(reduce({_id: this.item._id, number: finalQuantity}));
      this.store.dispatch(eraseQuantity({number: 1}));
      let item = JSON.parse(localStorage.getItem(this.item._id)!);
      localStorage.removeItem(this.item._id);
      item.quantity--;
      localStorage.setItem(this.item._id, JSON.stringify(item));
    }
  }

  oneMore() {
    let finalQuantity = this.item.quantity + 1;
    this.store.dispatch(addMore({_id: this.item._id, quantity: finalQuantity}))
    this.store.dispatch(addQuantity({number: 1}));
    let item = JSON.parse(localStorage.getItem(this.item._id)!);
    localStorage.removeItem(this.item._id);
    item.quantity++;
    localStorage.setItem(this.item._id, JSON.stringify(item));
  }

  eraseAll() {
    this.store.dispatch(deleteItem({_id: this.item._id}));
    this.store.dispatch(eraseQuantity({number: this.item.quantity}));
    localStorage.removeItem(this.item._id);
  }
}
