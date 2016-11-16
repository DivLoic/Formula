import { Injectable } from '@angular/core';

import { Driver } from './model/driver';

const d: Driver[] = [
  {firstName: 'NICO', lastName: 'ROSBERG', team: {name: 'MERCEDES'}, points: 349, code:'', nb:0},
  {firstName: 'LEWIS', lastName: 'HAMILTON', team: {name: 'MERCEDES'}, points: 330, code:'', nb:0},
  {firstName: 'DANIEL', lastName: 'RICCIARDO', team: {name: 'RED BULL'}, points: 242, code:'', nb:0},
  {firstName: 'SEBASTIAN', lastName: 'VETTEL', team: {name: 'FERRARI'}, points: 187, code:'', nb:0},
  {firstName: 'KIMI', lastName: 'RÄIKKÖNEN', team: {name: 'FERRARI'}, points: 178, code:'', nb:0}
];

@Injectable()
export class DriverService {

  constructor() { }

  getDrivers(): Promise<Driver[]> {
    return Promise.resolve(d)
  }

  getTop5Drivers(): Promise<Driver[]>{
    return Promise.resolve(d)
  }

}
