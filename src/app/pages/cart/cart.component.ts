import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../commons/models/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(
    private cartSvc: CartService
  ) {
    this.products$ = new Observable<Product[]>();
  }

  ngOnInit(): void {
    this.products$ = this.cartSvc.getCart();
  }

  deleteItem($event: number) {
    this.cartSvc.deleteProduct($event);
  }
}
