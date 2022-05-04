import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../commons/models/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(
    private productsSvc: ProductsService,
    private cartSvc: CartService
  ) {
    this.products$ = new Observable<Product[]>();
  }

  ngOnInit(): void {
    this.products$ = this.productsSvc.getProducts();
  }

  addToCart(product: Product) {
    this.cartSvc.addToCart(product);
  }
}
