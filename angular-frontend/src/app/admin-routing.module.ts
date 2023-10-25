import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerCreateComponent } from './passenger-create/passenger-create.component';
import { DestinationSearchComponent } from './destination-search/destination-search.component';
import { PassengerUpdateComponent } from './passenger-update/passenger-update.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerDetailsComponentComponent } from './passenger-details-component/passenger-details-component.component';
import { FirstTripListComponent } from './first-trip-list/first-trip-list.component';
import { FirstTripDetailsComponent } from './first-trip-details/first-trip-details.component';


const adminRoutes: Routes = [
    { path: 'passengers', component: PassengerListComponent }, // Update component name
    { path: '', redirectTo: 'passengers', pathMatch: 'full' }, // Update default path
    { path: 'destination-search', component: DestinationSearchComponent },
    { path: 'update-passenger/:id', component: PassengerUpdateComponent }, // Update component name and parameter
    { path: 'search-passenger', component: PassengerSearchComponent},
    { path: 'view-passenger/:id', component: PassengerDetailsComponentComponent},
    { path: 'firsttrips', component:FirstTripListComponent},
    { path: 'view-firsttrip/:id', component:FirstTripDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
