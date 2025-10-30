import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../core/services/shop.service';
import { IProduct } from '../../shared/models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product?: IProduct;
  constructor(private shopService: ShopService,private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {

this.loadProduct();
  }

  loadProduct() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      if (id) {
    this.shopService.getProduct(id).subscribe(p => {
      this.product = p;
    }, error => {
      console.log(error);
    }
    )
  }
  }

}
