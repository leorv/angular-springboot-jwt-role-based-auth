import { UserAuthService } from './user-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API: string = 'http://localhost:9090/';
    requestHeaders = new HttpHeaders(
        { "No-Auth": "True" }
    );

    constructor(private http: HttpClient,
        private userAuthService: UserAuthService) { }

    /**
    * @return An Observable.
    *
    * To store the Jwt Token, we can use the LocalStorage,
    * Cookies, SessionStorage, etc.
    *
    * 
    */
    public login(loginData: any) {
        return this.http.post(`${this.API}authenticate`, loginData, { headers: this.requestHeaders });
    }

    public forUser() {
        return this.http.get(`${this.API}forUser`, {responseType: 'text'});
    }

    public forAdmin() {
        return this.http.get(`${this.API}forAdmin`, { responseType: 'text' });
    }

    public roleMatches(allowedRole: string): boolean {
        // let isMatch = false;
        const userRoles: any = this.userAuthService.getRoles();
        
        const match = userRoles?.find((r: any) => r.roleName == allowedRole);

        if (match != null && match != undefined) {
            return true;
        }
        else {
            return false;
        }

        // if (userRoles != null && userRoles) {
        //     for (let i = 0; i < userRoles.length; i++) {
        //         for (let j = 0; j < allowedRoles.length; j++) {
        //             if (userRoles[i] === allowedRoles[j]){
        //                 isMatch = true;
        //                 return isMatch;
        //             } else {
        //                 return isMatch;
        //             }
        //         }
        //     }
        // }

        // In other case: 
        //
        // let matches: boolean[] = [];

        // allowedRoles.forEach((allowedRole) => {
        //     const userRole = userRoles?.find(role => role == allowedRole);
        //     if ( userRole == undefined) {
        //         matches.push(false);
        //     } else {
        //         matches.push(true);
        //     };
        // });

        // if (!matches.includes(false)){
        //     return true;
        // } else {
        //     return false;
        // }

    }
}
