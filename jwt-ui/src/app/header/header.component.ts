import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserAuthService } from './../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private userAuthService: UserAuthService,
                private router: Router,
                private userService: UserService
        ) { }

    ngOnInit(): void {
        console.log(this.userService.roleMatches('admin'));
        console.log(this.userService.roleMatches('user'));
    }

    public isLoggedIn() {
        return this.userAuthService.isLoggedin();
    }

    public logout() {
        this.userAuthService.clear();
        this.router.navigate(['/home']);
    }

    roleMatches(role: string): boolean {
        return this.userService.roleMatches(role);
    }
}
