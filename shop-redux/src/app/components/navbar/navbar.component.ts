import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
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
  
  constructor(private store: Store<AppState>, private service: ServiceService) { }

  ngOnInit(): void {
    this.getNumber();
  }

  getNumber() {
    this.store.select('shopping').subscribe(state => {
      if (state.length > 0) {
        this.number = state.length;
      } else {
        let items = { ...localStorage };
        if (localStorage.length !== 0) {
          for (const item in items) {
            this.getProduct(items[item]);
          };
          //this.store.select('shopping').subscribe(state => console.log(state))
        }
      }
    })
  }

  getProduct(id: string) {
    this.service.getMovie(id).subscribe(r => {
      this.number++;
      this.store.dispatch(add({_id: r._id}))
    })
  }
}
