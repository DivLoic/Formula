import { Injectable } from '@angular/core';

import { Driver } from './model/driver';
import { HttpHook } from "./HttpHook";

const d: Driver[] = [
  {firstName: 'NICO', lastName: 'ROSBERG', team: {name: 'MERCEDES'}, points: 349, code:'', nb:0},
  {firstName: 'LEWIS', lastName: 'HAMILTON', team: {name: 'MERCEDES'}, points: 330, code:'', nb:0},
  {firstName: 'DANIEL', lastName: 'RICCIARDO', team: {name: 'RED BULL'}, points: 242, code:'', nb:0},
  {firstName: 'SEBASTIAN', lastName: 'VETTEL', team: {name: 'FERRARI'}, points: 187, code:'', nb:0},
  {firstName: 'KIMI', lastName: 'RÄIKKÖNEN', team: {name: 'FERRARI'}, points: 178, code:'', nb:0}
];

@Injectable()
export class DriverService {

  constructor(private http: HttpHook) {
    this.http.payLoadTable = "StandingsTable";
    this.http.payLoadKey = "StandingsLists";
  }

  url: string = "/driverStandings.json";

  getDrivers(): Promise<Driver[]> {
    return this.http.get(this.url)
      .then(res => this.driverParser(res.json()))
      .catch(console.log);
  }

  getTop5Drivers(): Promise<Driver[]> {
    return this.http.get(this.url + "?limit=5")
      .then(res => this.driverParser(res.json()))
      .catch(console.log);
  }

  /**
   * Map the structure of http://ergast.com/api to the driver model
   * @param json
   * @returns javascript object standing for Driver
   */
   driverParser(json) {
    return this.http.extractPayload(json)[0]['DriverStandings']
      .map(function (payload) {
        return {
          'team': {'name': payload.Constructors[0].name},
          'firstName': payload.Driver.familyName,
          'lastName': payload.Driver.givenName,
          'code': payload.Driver.code,
          'points': payload.points,
          'nb': payload.wins
        }
      });
  }
}
