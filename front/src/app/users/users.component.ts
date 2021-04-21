import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }


  users: Array<any> = new Array<any>();
  isLoading : boolean = true;

  ngOnInit(): void {


    this.userService.getAll().subscribe(
      (res)=>{
        this.isLoading = false
        if (res){
          this.users = res as Array<any>;
        }
      }
    )

  }

}
