import { Injectable } from '@angular/core';
import { Product } from '../commons/models/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  #products = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getCart(): Observable<Product[]> {
    return this.#products.asObservable();
  }

  addToCart(product: Product) {
    const currentProducts = this.#products.getValue();
    const newProducts = [...currentProducts, product];
    this.#products.next(newProducts);
  }

  deleteProduct(id: number) {
    const currentProducts = this.#products.getValue();
    const newProducts = currentProducts.filter(product => product.id !== id);
    this.#products.next(newProducts);
  }
}
