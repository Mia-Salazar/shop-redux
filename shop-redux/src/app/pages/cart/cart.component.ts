import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieModel } from 'src/app/models/movie.model';

import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: MovieModel[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    this.store.subscribe(state => {
      //this.carts = state;
      console.log(state)
    })
  }
}
