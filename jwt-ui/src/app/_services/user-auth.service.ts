import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserAuthService {

    constructor() { }

    public setRoles(roles: string){
        localStorage.setItem("roles", JSON.stringify(roles));
    }

    public getRoles(): [] | null {
        const item: string | null = localStorage.getItem("roles");
        if (item != null) {
            return JSON.parse(item);
        } else {
            return null;
        }
    }

    public setToken(jwtToken: string) {
        localStorage.setItem("jwtToken", jwtToken);
    }

    public getToken(): string {
        const item: string | null = localStorage.getItem("jwtToken");
        if (item != null && item != ''){
            return item;
        }
        return '';
    }

    public clear() {
        localStorage.clear();
    }

    public isLoggedin() {
        return this.getRoles() && this.getToken();
    }
}
