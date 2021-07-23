import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {delay} from "rxjs/operators";
import {UserRegistrationService} from "../user-registration.service";



@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  // @ts-ignore
  @Input() user: User = {} as User;
  users: User[] = [];
  // @ts-ignore
  loading: false;
  userName = '';
  userPassword = '';
  page: number = 1;
  count: number = 4;
  constructor(private http: HttpClient, private service:UserRegistrationService) { }

  ngOnInit(): void {

    this.fetchUsers();

  }

  removeUser(id: any) {
    this.users = this.users.filter(t => t.userId !== id);
    this.http.delete(`http://localhost:9999/users/${id}`)
      .subscribe()
  }
  register() {
   /* if(!this.userName.trim() && !this.userPassword.trim()){
      return
    }*/
   /* const newUser: User = {
      name: this.userName,
      password: this.userPassword
    }*/

    this.http.post<User>('http://localhost:9999/users/',this.user)
      .subscribe(user => {
        this.users.push(user);
        this.userName = '';
        this.userPassword = '';
      })
  }

  fetchUsers() {
    this.http.get<User[]>('http://localhost:9999/users')
      .subscribe(users => {
        this.users = users;
      })
  }

// user: User, then ${user.id}
  updateUser(id: any) {
    this.service.getUserById(this.user.userId)
      .subscribe();
    /*this.users = this.users.filter(t => t.userId !== id);
    const newUser: User = {
      name: this.userName,
      password: this.userPassword

    }
    this.http.put<any>(`http://localhost:9999/users/${id}`,newUser)
      .subscribe();
  }*/
  }
}
