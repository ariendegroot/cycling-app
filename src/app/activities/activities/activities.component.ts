import { ActivitiesService } from '../../services/activities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  
  activities: any; 
  
  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit() {  
    this
      .activitiesService
      .getActivities()
      .subscribe((data: any) => {
        this.activities = data;
        console.log(data);
      });


  }

}
