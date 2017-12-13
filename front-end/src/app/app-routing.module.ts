import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './cardetails/cardetails';
import { LoginComponent } from './login/index';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
{ path: 'login'  ,component: LoginComponent},
{ path: 'cardetails'  ,component: CarDetailsComponent},
{ path: '', redirectTo:'test', pathMatch:'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers:[
    
  ]
})
export class AppRoutingModule {

}