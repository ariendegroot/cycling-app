import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any; 
  
  constructor(private userService: UserService) {}

  ngOnInit() {  
    this
      .userService
      .getUser()
      .subscribe((data: any) => {
        this.user = data;
        console.log(data);
      }); 
  }
}