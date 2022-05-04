import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '@commons/models/products';
import { Http } from '@utils/http.service';
import { environment } from '@env/environment';
import { apiUrls } from '@commons/const';

@Injectable()
export class ProductsService {

  constructor(
    private http: Http
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.backUrl}/${apiUrls.photos}`)
      .pipe(
        map(res => res.slice(0, 10))
      );
  }
}
