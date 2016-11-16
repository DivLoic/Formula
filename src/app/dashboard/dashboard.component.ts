import { Component, OnInit } from '@angular/core';

import { Driver } from '../model/driver';

import { DriverService } from '../driver.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.driverService.getTop5Drivers().then(
      top => this.topDrivers = top
    );

    // TODO: extract the default stat Driver
    //this.driver = this.topDrivers[0]
  }

  title: String = "Welcome Dasboard";

  // TODO: Find stat properties
  driver : Driver =  {firstName: 'NICO', lastName: 'ROSBERG', team: {name: 'MERCEDES'}, points: 349, code:'', nb:0};

  topDrivers: Driver[] = [];

  setDriver(d: Driver): void {
    this.driver = d;
  }

}
