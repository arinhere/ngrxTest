import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  itemList: Array<any>=[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.listProduct()
      .subscribe(result=>{
        this.itemList=result['body'];
      })
  }

}
