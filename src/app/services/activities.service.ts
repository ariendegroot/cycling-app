import { Globals } from './globals';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
  export class ActivitiesService {
  url = Globals.STRAVA_URL + '/athlete/activities?per_page=6&access_token='+ Globals.TOKEN;
  constructor(private http: HttpClient) { }

  getActivities() {
    return this
    .http
    .get(`${this.url}`)
  }
}
