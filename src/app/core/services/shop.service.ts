import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../../shared/models/Pagination';
import { IBrand } from '../../shared/models/Brands';
import { IType } from '../../shared/models/ProductTypes';
import { delay, map } from 'rxjs/operators';
import { ShopParams } from '../../shared/shopParams';
import { IProduct } from '../../shared/models/products';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl =  environment.apiUrl+'/';
  constructor(private http: HttpClient) {

  }



  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.brandId) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if(shopParams.search)
      {
        params=params.append('search',shopParams.search);
      }


    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

    console.log(params);

    return this.http.get<IPagination>(this.baseUrl + 'products/paged', { observe: 'response', params })
      .pipe(

        map(response => {
          return response.body ?? { pageIndex: 1, pageSize: 10, count: 0, data: [] };
        })
      )
  }

  getProduct(id:number){
    return this.http.get<IProduct>(this.baseUrl+'products/'+id)
  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
