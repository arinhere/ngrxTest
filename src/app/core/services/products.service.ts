import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fromApp from '../../app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class ProductService{
    constructor(
        private _http: HttpClient, 
        private _store: Store<{products: fromApp.State}>){}

    addProduct(body){
        var url="http://localhost:3000/api/products/add";
        return this._http.post(url,body);
    }

    listProduct(){
        //this._store.dispatch({type: 'LOAD_PRODUCTS'});
        var url="http://localhost:3000/api/products";
        return this._http.get(url);
    }
}