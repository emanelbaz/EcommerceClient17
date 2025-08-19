import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl='https://localhost:7166/api/';
  constructor(private http:HttpClient) { 
    
  }

  getProducts(){
      return this.http.get<IPagination>(this.baseUrl+'products/paged?pagesize=50');
    }

}
