import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { DashboardComponent }           from './dashboard/dashboard.component';
import { DriversGridComponent }         from "./drivers-grid/drivers-grid.component";
import { ConstructorsGridComponent }    from "./constructors-grid/constructors-grid.component";
import { CircuitMapComponent }          from "./circuit-map/circuit-map.component";

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'drivers', component: DriversGridComponent },
  { path: 'circuits', component: CircuitMapComponent },
  { path: 'constructors', component: ConstructorsGridComponent },
  { path: 'db', component: DashboardComponent},
  //{ path: '' component: },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
