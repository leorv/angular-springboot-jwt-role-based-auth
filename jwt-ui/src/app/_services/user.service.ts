import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API: string = 'http://localhost:9090/';
    requestHeaders = new HttpHeaders(
        { "No-Auth": "True"}
    );

    constructor(private http: HttpClient) { }

    /**
    * @return An Observable.
    *
    * To store the Jwt Token, we can use the LocalStorage,
    * Cookies, SessionStorage, etc.
    *
    * 
    */
    public login(loginData: any){
        return this.http.post(`${this.API}authenticate`, loginData, { headers: this.requestHeaders });
    }
}
