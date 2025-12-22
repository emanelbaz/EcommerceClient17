import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { ICheckoutRequest } from 'src/app/shared/interfaces/icheckout-request';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl + '/Orders';


  constructor(private httpClient : HttpClient) { }

  createOrder(orderData:ICheckoutRequest){
    return this.httpClient.post<any>(`${this.baseUrl}/create`, orderData);
  }
}
