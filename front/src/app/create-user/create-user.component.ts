import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  @ViewChild("createForm") createForm : NgForm;

  email : string ="";
  age : number;
  name: string = "";

  ngOnInit(): void {
  }


  created: string;
  isLoading : boolean = false;
  submit(){
    this.isLoading  = true;
    this.created = "";
    this.userService.create(this.name, this.age, this.email).subscribe(
      (res)=>{
        this.isLoading = false;
        this.created ="User Created successfully";
        this.createForm.resetForm();
      },
      (err)=>{
        this.created = JSON.stringify(err["error"]);
        this.isLoading= false;
      }
    )
  }

}
