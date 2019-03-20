import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/products.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  //itemList: Observale<[]>
  itemList: Array<any>=[];
  constructor(private _productService: ProductService, private _store: Store<{products: fromApp.State}>) { }

  ngOnInit() {
    //this.itemList=this._store.subscribe(result => result.products.listProducts);
    this._productService.listProduct()
      .subscribe(result=>{
        this.itemList=result['body'];
      })
  }

}
