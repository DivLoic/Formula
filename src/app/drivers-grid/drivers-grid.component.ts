import { Component, OnInit } from '@angular/core';
import {Driver} from "../model/driver";
import {DriverService} from "../driver.service";

@Component({
  selector: 'app-drivers-grid',
  templateUrl: './drivers-grid.component.html',
  styleUrls: ['./drivers-grid.component.css']
})
export class DriversGridComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  ngOnInit() {

    this.driverService.getDrivers().then(
      all => this.allDrivers = all
    )

  }

  title = "Drivers Championship";

  allDrivers: Driver[];

}
