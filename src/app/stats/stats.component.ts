import { StatsService } from '../services/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats: any; 
  
  constructor(private statsService: StatsService) {}

  ngOnInit() {  
    this
      .statsService
      .getStats()
      .subscribe((data: any) => {
        this.stats = data;
        console.log(data);
      }); 
  }
}