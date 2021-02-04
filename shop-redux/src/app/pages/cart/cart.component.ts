import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { MovieModel } from 'src/app/models/movie.model';
import { stopWaiting, waiting } from 'src/app/store/actions/ui.actions';
import { AppState } from 'src/app/store/state';
import { removeAll } from '../../store/actions/shopping.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: MovieModel[];
  subtotal: number = 0;
  loading: boolean;
  subscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.subscription = this.store.subscribe( ui => {
      this.loading = ui.waiting.waiting;
    })
  }

  ngOnInit(): void {
    this.getCart();
    this.getTotal();
  }

  getCart(): void {
    this.store.select('shopping').subscribe(state => {
      this.carts = state;
    })
  }

  buy() {
    this.store.dispatch(waiting());
    window.alert('Gracias por comprar');
    this.store.dispatch(removeAll());
    this.subtotal = 0;
    localStorage.clear();
    this.store.dispatch(stopWaiting());
  }

  getTotal() {
    this.carts.forEach(element => {
      let temp = element.runtimeInMinutes * element.quantity;
      this.subtotal = this.subtotal + temp;
    });
  }
}
