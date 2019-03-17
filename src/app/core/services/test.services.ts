import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService{

    constructor(private _http: HttpClient){}

    getData(){
        var url="http://localhost:3000/api/user/getData";
        return this._http.get(url);
    } 
    
    signUp(body){
        var url="http://localhost:3000/api/user/signup";        
        return this._http.post(url, body);
    }

    login(body){
        var url="http://localhost:3000/api/user/login";        
        return this._http.post(url, body);
    }

    deleteData(name){
        var url="http://localhost:3000/api/user/deleteData/Arin";
        return this._http.delete(url);
    }
}