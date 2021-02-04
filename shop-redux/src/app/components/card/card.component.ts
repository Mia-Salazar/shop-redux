import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { waiting, stopWaiting } from '../../store/actions/ui.actions';
import { add, addMore } from '../../store/actions/shopping.actions';
import { addQuantity } from '../../store/actions/quantity.actions';
import { AppState } from '../../store/state';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() available: boolean;
  @Input() id: string;
  loading: boolean = false;
  subscription: Subscription;
  quantity: number = 1;
  list: MovieModel[];

  constructor(private store: Store<AppState>) {
    this.subscription = this.store.subscribe( ui => {
      this.loading = ui.waiting.waiting;
    })
  }

  ngOnInit(): void {
    this.store.select('shopping').subscribe((state: any) => {
      this.list = state;
    })
  }

  add(): void {
    this.store.dispatch(addQuantity({number: 1}));
    const movie: MovieModel = {
      name: this.name,
      _id: this.id,
      runtimeInMinutes: this.price,
      quantity: this.quantity
    }
    const found = this.list.find(element => element._id === this.id);
    if (found) {
      let item = JSON.parse(localStorage.getItem(this.id)!);
      localStorage.removeItem(this.id);
      item.quantity++;
      localStorage.setItem(this.id, JSON.stringify(item));
      let newQuantity = found.quantity;
      newQuantity++;
      this.store.dispatch(waiting())
      this.store.dispatch(addMore({_id: this.id, quantity: newQuantity}))
      this.store.dispatch(stopWaiting())
    } else {
      localStorage.setItem(this.id, JSON.stringify(movie));
      this.store.dispatch(waiting())
      this.store.dispatch(add({movie}))
      this.store.dispatch(stopWaiting())
    }
  }
}
