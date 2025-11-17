import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IProduct } from '../shared/models/products';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
     getProducts():Observable<IProduct[]> {
    return  this.http.get<IProduct[]>(`${environment.apiUrl}/Products`)

  }

  

  // getProductById(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.baseUrl}/${id}`);
  // }
}

