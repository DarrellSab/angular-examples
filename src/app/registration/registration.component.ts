import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserRegistrationService} from "../user-registration.service";
import {Route, Router} from "@angular/router";
/*
export interface User {
  name: any,
  password: any,
  id?: number
}
*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // @ts-ignore
  user: User = {} as User;
  message: any;

  constructor(private  service:UserRegistrationService, private route:Router) { }

  ngOnInit(): void {
    //this.register();
  }

  register() {
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    console.log("response",resp);
    //e.preventDefault();
  }

  loadSearchPage() {
    this.route.navigate(['search']);
  }
}
