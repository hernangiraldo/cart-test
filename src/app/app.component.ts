import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-bhd-tabs';

  quantity: number = 0;

  constructor(
    private cartService: CartService,
  ) {
    this.cartService.getCart().subscribe(quantity => {
      this.quantity = quantity.length;
    });
  }
}
