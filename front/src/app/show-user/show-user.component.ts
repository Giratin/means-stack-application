import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  isLoading : boolean = true;
  isError: boolean = false;
  user: any;
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(params);
      
      if(params["id"]){
        this.userService.getOne(params["id"]).subscribe(
          (res)=>{
            this.isLoading = false;
            this.user= res;
            this.isError= false;
          },
          (err)=>{
            this.isError= true;
            this.isLoading = false;
          }
        )
      }
    })
  }

}
