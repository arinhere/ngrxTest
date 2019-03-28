import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService{

    constructor(private _http: HttpClient){}
    apiEP="http://localhost:3000";

    getData(){
        var url=this.apiEP + "/get";
        return this._http.get(url);
    } 

    getDataByID(id){
        var url=this.apiEP + "/get/"+id;
        return this._http.get(url);
    }
    
    postData(body){
        var url=this.apiEP + "/post";        
        return this._http.post(url, body);
    }

    updateData(body){
        var url=this.apiEP + "/put";        
        return this._http.put(url, body);
    }

    deleteData(id){
        var url=this.apiEP + "/delete/"+id;
        return this._http.delete(url);
    }
}