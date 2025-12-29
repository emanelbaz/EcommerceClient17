// import { jwtDecode } from './../../../../node_modules/jwt-decode/build/cjs/index.d';
import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { environment} from '../../environments/environment';
import { User } from '../../shared/models/user';
import { IUserToken } from 'src/app/shared/interfaces/iuser-token';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl + '/account';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  userData :IUserToken = {} as IUserToken;



  constructor(private http: HttpClient) {}

  register(values: any) {
    console.log('Register values:', values);
    return this.http.post<User>(`${this.baseUrl}/register`, values).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  userLogin(values: any) {
    return this.http.post<User>(`${this.baseUrl}/login`, values).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);

    localStorage.removeItem(environment.token);
    this.userData = {} as IUserToken;
  }

  saveUserData():void{
    if(localStorage.getItem(environment.token) !== null){
      this.userData =  jwtDecode<IUserToken>(localStorage.getItem(environment.token)!)
      console.log('Decoded user data:', this.userData);
    }
  }
}
