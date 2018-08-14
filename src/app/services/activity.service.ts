import { Globals } from './globals';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
    export class ActivityService {

  const url: string;

  constructor(
    private http: HttpClient) { }

  getActivity(id: number) {
    this.url = Globals.STRAVA_URL'/activities/'+ id + '?include_all_efforts=true&access_token='+ Globals.TOKEN;
    return this
    .http
    .get(`${this.url}`)
  }
}
