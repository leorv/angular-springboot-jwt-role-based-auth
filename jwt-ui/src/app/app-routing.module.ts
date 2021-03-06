import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
    { path: 'forbidden', component: ForbiddenComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user-dashboard', component: UserComponent, canActivate: [AuthGuard], data: { role: 'user' } },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {role: 'admin'} },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
