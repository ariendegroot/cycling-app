import { Globals } from './globals';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
    export class StatsService {

    url = Globals.STRAVA_URL + '/athletes/8237083/stats?&access_token='+ Globals.TOKEN;

    constructor(
      private http: HttpClient) { }

  getStats() {
    return this
    .http
    .get(`${this.url}`)
  }
}
