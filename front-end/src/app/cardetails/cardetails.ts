import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CarModel} from '../cardetails/cardetails_model';
import { RatingModel} from '../cardetails/ratingdetails_model';
import 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: "user-view",
  templateUrl: "cardetails.html",
  styleUrls: ["cardetails.css"]
})
export class CarDetailsComponent {
    title = 'Car Management';
    headers = new Headers();
    savesuccessFlag:Boolean;
    errorFlag:Boolean;
    options:RequestOptions;
    cardetails:CarModel;
    ratingDetails:RatingModel;
    result : CarModel[];
    ratingResult:RatingModel[];
    temp:string;
    constructor(private http: Http,private router: Router) {
            this.headers.set('Content-Type', 'application/json');
            this.options = new RequestOptions({ headers: this.headers });
            this.cardetails = new CarModel();
            this.ratingDetails = new RatingModel();
            this.reloadPage();
        }
    reloadPage(){
        this.http.get("http://localhost:8080/carmanager/getAllCars/",this.options)
                    .map((res: Response) => res.json())
                        .subscribe(json => {
                            this.result = json;
                },
                err => {
                    console.log(err);
            }
            );
    }
    onSubmit(make,model,year) { 
        this.http.get('http://localhost:8080/carmanager/saveCar/'+make+"/"+model+"/"+year , this.options )
            .map((res: Response) => res)
                .subscribe((json: Object) => {
                    this.reloadPage();
                },
                err => { 
                    console.log(err);
                }
                );
    } 
            onSubmitRating(id,rating){
                this.http.get('http://localhost:8080/carmanager/addRating/'+id+"/"+rating, this.options )
                    .map((res: Response) => res)
                    .subscribe((json: Object) => {
                                this.reloadPage();
                                this.ratingDetails.rating='';
                                this.getRatings(id);                
                        },
                        err => { 
                            console.log(err);
                        }
                );
            }
getRatings(data){
    this.temp = data;
    this.ratingDetails.id = data;
       this.http.get('http://localhost:8080/carmanager/getRatings/'+data, this.options )
            .map((res: Response) => res.json())
                .subscribe(json => {
                    this.ratingResult = json;
                   },
                err => { 
                    console.log(err);
                }
                );
    }
}