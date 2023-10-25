import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PassengerCreateComponent } from './passenger-create/passenger-create.component';


const userRoutes: Routes = [
    { path:  'home-page',component: HomepageComponent},
  { path: 'create-passenger', component: PassengerCreateComponent },
  // Add more user routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
