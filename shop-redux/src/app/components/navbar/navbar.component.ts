import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { MovieModel } from 'src/app/models/movie.model';
import { ServiceService } from 'src/app/services/service.service';
import { add } from '../../store/actions/shopping.actions';
import { AppState } from '../../store/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() number = 0;
  list: MovieModel[];
  
  constructor(private store: Store<AppState>, private service: ServiceService) { }

  ngOnInit(): void {
    this.store.select('shopping').subscribe((state: any) => {
      this.list = state;
    })
    this.getNumber();

  }

  getNumber() {
    if (this.list.length > 0) {
      for (const item in this.list) {
        this.number = this.number + this.list[item].quantity;
      };
    } else {
      let items = { ...localStorage };
      if (localStorage.length !== 0) {
        for (const item in items) {
          let temp: MovieModel = JSON.parse(items[item]);
          this.number = this.number + temp.quantity;
          this.store.dispatch(add({movie: temp}))
        };
      }
    }
  }

}
