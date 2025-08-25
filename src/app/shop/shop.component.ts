import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/products';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/Brands';
import { IType } from '../shared/models/ProductTypes';
import { ShopParams } from '../shared/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: true }) searchTerm?: ElementRef;
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  totalCount: number = 0;
  shopParams = new ShopParams;
  sortOption = [
    { name: 'Alphabbetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price:  High to low', value: 'priceDesc' }

  ];

  constructor(private shopService: ShopService) {

  }
  ngOnInit(): void {

    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  getProducts() {

    this.shopService.getProducts(this.shopParams).subscribe(response => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;
      console.log('response' + response.data)
    }, error => {
      console.log(error);
    });
  }




  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error)
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.types = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error)
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    console.log("types : " + typeId)
    this.getProducts();
  }


  onSortSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.shopParams.sort = selectElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();

  }
  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }


  }

  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.getProducts();
  }

  onReset() {
    if (this.searchTerm) {
      this.searchTerm.nativeElement.value = '';
    }
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
