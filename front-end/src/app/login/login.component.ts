import { Component } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: "app-root",
  templateUrl: "login.component.html",
  styleUrls: ['login.component.css']
})
export class LoginComponent {
    title = 'Car Management';
    headers = new Headers();
    options:RequestOptions;
    cookies: Object;
    authcookie: string;
    constructor(private http: Http,private router: Router){
      this.headers.set('Content-Type', 'application/json'); 
      this.options = new RequestOptions({ headers: this.headers });
    }
    
}
