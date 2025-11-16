import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
     getProducts():Observable<Product[]> {
    return  this.http.get<Product[]>(`${environment.apiUrl}/Products`)

  }

  

  // getProductById(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.baseUrl}/${id}`);
  // }
}

