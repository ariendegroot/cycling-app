import { ActivityService } from '../../services/activity.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activityID: number;
  activity: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService
  ) {}
  ngOnInit() { 
    this.route.params
      .subscribe((data: Params) => {
        this.activityID = data.id;
      })
 
    this.activityService
      .getActivity(this.activityID)
      .subscribe((data: any) => {
        this.activity = data;
        console.log(data);
      }); 
    }
 
}  