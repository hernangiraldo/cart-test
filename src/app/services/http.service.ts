import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class Http {
  abstract get<T>(url: string): Observable<T>;
}

@Injectable()
export class HttpService extends Http{

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
  }
}
