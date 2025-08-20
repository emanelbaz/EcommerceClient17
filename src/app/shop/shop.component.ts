import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/products';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/Brands';
import { IType } from '../shared/models/ProductTypes';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  brandIdSelected?:number;
  typeIdSelected?:number;

  constructor(private shopService: ShopService) {

  }
  ngOnInit(): void {

    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  getProducts() {
  const brand = this.brandIdSelected === 0 ? undefined : this.brandIdSelected;
  const type = this.typeIdSelected === 0 ? undefined : this.typeIdSelected;

  this.shopService.getProducts(brand, type).subscribe(response => {
    this.products = response.data;
    console.log(this.products)
  }, error => {
    console.log(error);
  });
}


 

  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id:0,name:'All'},...response];
    }, error => {
      console.log(error)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.types =[{id:0,name:'All'},...response];
    }, error => {
      console.log(error)
    });
  }

  onBrandSelected(brandId:number){
    this.brandIdSelected=brandId;
    this.getProducts();
  }

  onTypeSelected(typeId:number){
    this.typeIdSelected=typeId;
    console.log("types : "+this.typeIdSelected)
    this.getProducts();
  }
}
