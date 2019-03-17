import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService{
    constructor(private _http: HttpClient){}

    addProduct(body){
        var url="http://localhost:3000/api/products/add";
        return this._http.post(url,body);
    }

    listProduct(){
        var url="http://localhost:3000/api/products";
        return this._http.get(url);
    }
}