import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cookie } from 'ng2-cookies';
@Injectable()
export class AuthGuard implements CanActivate {
    cookies: Object;
    authcookie: string;
    constructor(private router: Router) {
        // console.log("constructor");
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.cookies = Cookie.getAll();
        this.authcookie = this.cookies['XSRF-TOKEN'];
        if (this.authcookie != null) {
            console.log(this.authcookie);
            this.router.navigateByUrl('http://localhost:4200/cardetails');
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}