import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { HttpHook } from "./HttpHook";
import { DriverService } from './driver.service';
import { CircuitService } from "./circuit.service";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriversGridComponent } from './drivers-grid/drivers-grid.component';
import { ConstructorsGridComponent } from './constructors-grid/constructors-grid.component';
import { CircuitsMapComponent } from './circuits-map/circuits-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DriversGridComponent,
    ConstructorsGridComponent,
    CircuitsMapComponent
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
