import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "../user-registration.service";
import {ActivatedRoute, ParamMap,Params} from "@angular/router";
import { Location } from '@angular/common';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() currentUser: User  = {
    userId: 0,
    name: '',
    password: ''
  }

  // @ts-ignore
  @Input() user !: User = {} as User;

  // @ts-ignore
  /*@Input() user1: User;*/
  // @ts-ignore
  data: "";
  // @ts-ignore
   user2: User[] = [];
   // @ts-ignore

  user3: User = new User;

  constructor(private service: UserRegistrationService, private route: ActivatedRoute,  private location: Location) { }

  ngOnInit(){
   // this.getUserFromRoute();


    this.getUser(+this.route.snapshot.params.id);

  }
  getUserFromRoute() {
   /* const id = +this.route.snapshot.params['id'];
    // @ts-ignore
    this.user3 = this.service.getUserById(id);
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`)

    this.route.params
      .subscribe(
        (params: Params) =>{
          // @ts-ignore
          this.user3 = this.service.get(+params['id']);
        }
      )
// @ts-ignore
    this.service.get(this.user3).subscribe(
  user => this.user3 = user
);*/
  }

  getUser(id: number): void{
    this.service.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }


  save(): void {
    this.service.updateUser(this.user).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
