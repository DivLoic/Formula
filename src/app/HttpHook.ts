import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';

/**
 * Created by loicmdivad on 26/11/2016.
 */
@Injectable()
export class HttpHook {

  payLoadKey: string;
  payLoadTable: string;
  season: number = new Date().getFullYear();
  apiUrl: string = "http://ergast.com/api/f1/" + this.season;

  constructor(private http: Http){}

  get(url: string) { return this.http.get(this.apiUrl + url).toPromise() }

  post(url: string, data) { return this.http.post(this.apiUrl + url, data) }

  extractPayload(data) {
    // this.payLoadTable
    // this.payLoadKey
    return data['MRData'][this.payLoadTable][this.payLoadKey];
  }

}
