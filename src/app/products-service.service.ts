import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://196.219.146.28:5000/api/Products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}

