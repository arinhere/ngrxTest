import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';//Adding NGRX Module

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add/add.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductService } from '../core/services/products.service';

@NgModule({
  declarations: [
    AddProductComponent,
    ListProductsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forRoot({}),//Adding NGRX Module
  ],
  providers: [
    ProductService
  ]
})

export class ProductsModule { }
