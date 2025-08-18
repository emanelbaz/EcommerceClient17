import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { IPagination } from './models/Pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

    title = 'Ecommerce';
    products:IProduct[]=[];

    constructor(private http:HttpClient){}

  ngOnInit(): void {
  this.http.get<IPagination>('https://localhost:7166/api/products/paged?pagesize=50')
    .subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      }
    });
}


}
