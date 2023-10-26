import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerListComponent } from './passenger-list/passenger-list.component'; // Import the appropriate component
import { PassengerCreateComponent } from './passenger-create/passenger-create.component'; // Import the appropriate component
import { PassengerUpdateComponent } from './passenger-update/passenger-update.component'; // Import the appropriate component
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { DestinationSearchComponent } from './destination-search/destination-search.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PassengerDetailsComponentComponent } from './passenger-details-component/passenger-details-component.component';
import { FirstTripListComponent } from './first-trip-list/first-trip-list.component';
import { FirstTripDetailsComponent } from './first-trip-details/first-trip-details.component';

import { ReviewComponent } from './review/review.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
 
  { path: 'create-passenger', component: PassengerCreateComponent }, // Update component name
  


  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'review', component:ReviewComponent},
  
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  
  

  { path: 'admin', canActivate: [AdminGuard], children: [
    { path: 'passengers', component: PassengerListComponent }, // Update component name
  { path: '', redirectTo: 'passengers', pathMatch: 'full' }, // Update default path
  { path: 'destination-search', component: DestinationSearchComponent },
  { path: 'update-passenger/:id', component: PassengerUpdateComponent }, // Update component name and parameter
  { path: 'search-passenger', component: PassengerSearchComponent},
  { path:  'home-page',component: HomepageComponent},
  { path: 'view-passenger/:id', component: PassengerDetailsComponentComponent},
  { path: 'firsttrips', component:FirstTripListComponent},
  { path: 'view-firsttrip/:id', component:FirstTripDetailsComponent},
    // Add more admin routes here
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule, 
    UserRoutingModule, ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
