import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  // injection http client to use observable in the apis
  private readonly _HttpClient = inject(HttpClient) ;




  // endpoint register

  registerAsUser(registerInfo:object):Observable<any> {
    return this._HttpClient.post(`${environment.base_Url}/api/Account/register` , registerInfo)
  }




  // login

  loginAsUser(loginInfo:object):Observable<any> {

    return this._HttpClient.post(`${environment.base_Url}/api/Account/register` , loginInfo)
  }



}
