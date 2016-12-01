import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { DriverService }        from './driver.service';
import { CircuitService }       from "./circuit.service";

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DriversGridComponent } from './drivers-grid/drivers-grid.component';
import { CircuitMapComponent }  from './circuit-map/circuit-map.component';
import { ConstructorsGridComponent } from './constructors-grid/constructors-grid.component';
import { HttpHook } from "./HttpHook";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DriversGridComponent,
    ConstructorsGridComponent,
    CircuitMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HttpHook, DriverService, CircuitService],
  bootstrap: [AppComponent]
})

export class AppModule { }
