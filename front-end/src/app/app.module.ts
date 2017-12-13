import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/index';
import { CarDetailsComponent } from './cardetails/cardetails'
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes ,provideRoutes} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
