import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/Pagination';
import { IBrand } from '../shared/models/Brands';
import { IType } from '../shared/models/ProductTypes';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl='https://localhost:7166/api/';
  constructor(private http:HttpClient) { 
    
  }

  

  getProducts(brandId?:number,typeId?:number){
    let params= new HttpParams();
    if(brandId){
      params=params.append('brandId',brandId.toString());
    }

    if(typeId){
      params=params.append('typeId',typeId.toString());
    }

    console.log(params);

      return this.http.get<IPagination>(this.baseUrl+'products/paged',{observe:'response',params})
      .pipe(
        
        map(response => {
          return response.body ?? { pageIndex: 1, pageSize: 10, count: 0, data: [] };
        })
      )
    }

     getBrands(){
      return this.http.get<IBrand[]>(this.baseUrl+'products/brands');
    }

 getTypes(){
      return this.http.get<IType[]>(this.baseUrl+'products/types');
    }
}
