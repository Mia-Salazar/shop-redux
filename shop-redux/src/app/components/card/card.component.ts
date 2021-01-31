import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { waiting, stopWaiting } from '../../store/actions/ui.actions';
import { add } from '../../store/actions/shopping.actions';
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

  constructor(private store: Store<AppState>) {
    this.subscription = this.store.subscribe( ui => {
      this.loading = ui.waiting.waiting;
    })
  }

  ngOnInit(): void {
  }

  add(): void {
    const movie: MovieModel = {
      name: this.name,
      _id: this.id,
      runtimeInMinutes: this.price
    }
    let id = Math.floor(Math.random() * 10000).toString();
    localStorage.setItem(id, this.id)
    this.store.dispatch(waiting())
    this.store.dispatch(add({movie}))
    this.store.dispatch(stopWaiting())
  }
}
