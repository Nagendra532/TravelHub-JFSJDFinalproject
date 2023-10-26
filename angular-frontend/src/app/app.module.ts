import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminRoutingModule } from './admin-routing.module';
import { UserRoutingModule } from './user-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerCreateComponent } from './passenger-create/passenger-create.component';
import { PassengerUpdateComponent } from './passenger-update/passenger-update.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { DestinationSearchComponent } from './destination-search/destination-search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PassengerDetailsComponentComponent } from './passenger-details-component/passenger-details-component.component';
import { FirstTripListComponent } from './first-trip-list/first-trip-list.component';
import { FirstTripDetailsComponent } from './first-trip-details/first-trip-details.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './auth.service';

import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    PassengerListComponent,
    PassengerCreateComponent,
    PassengerUpdateComponent,
    PassengerSearchComponent,
    DestinationSearchComponent,
    HomepageComponent,
    PassengerDetailsComponentComponent,
    FirstTripListComponent,
    FirstTripDetailsComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    AdminRoutingModule,
    UserRoutingModule
  ],
  providers: [AuthService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
