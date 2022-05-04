import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../commons/models/products';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: Http
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map(res => res.slice(0, 10))
      );
  }
}
