import { Component, OnInit, Input } from '@angular/core';
import { CartItemModel } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
