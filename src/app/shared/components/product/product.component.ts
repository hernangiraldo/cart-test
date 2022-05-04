import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../commons/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() isCart: boolean = false;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() deleteItem = new EventEmitter<number>();
}
