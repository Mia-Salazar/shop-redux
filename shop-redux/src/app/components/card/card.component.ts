import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { waiting, stopWaiting } from '../../store/actions/ui.actions';
import { add, addMore } from '../../store/actions/shopping.actions';
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

  constructor(private store: Store<AppState>) {
    this.subscription = this.store.subscribe( ui => {
      this.loading = ui.waiting.waiting;
    })
  }

  ngOnInit(): void {
  }

  add(): void {
    console.log('click')
    const movie: MovieModel = {
      name: this.name,
      _id: this.id,
      runtimeInMinutes: this.price,
      quantity: this.quantity
    }

    this.store.select('shopping').subscribe(state => {
      const found = state.find(element => {
        element._id === this.id
      });
      if (found !== undefined) {
        console.log('yes')
        console.log(this.quantity)
        this.quantity = ++found.quantity;
        console.log(this.quantity)
        this.addMore(this.id, this.quantity)
      } else {
        console.log('no')
        console.log(movie)
        console.log(this.quantity)
        //this.addOne(movie)
      }
    })
    // let id = Math.floor(Math.random() * 10000).toString();
    // localStorage.setItem(id, this.id)
  }

  addOne(movie: MovieModel) {
    this.store.dispatch(waiting())
    this.store.dispatch(add({movie}))
    this.store.dispatch(stopWaiting())
  }

  addMore(id: string, quantity: number) {
    this.store.dispatch(waiting())
    this.store.dispatch(addMore({_id: id, quantity: quantity}))
    this.store.dispatch(stopWaiting())

    // this.store.subscribe((state: any) => {
    //   console.log(state, 'estado mas')
    // })
  }
}
