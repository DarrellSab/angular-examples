import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "./model/user";
import {catchError, map, tap} from "rxjs/operators";
const baseUrl = 'http://localhost:9999/users';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
 private userUrl = "http://localhost:9999/users";
  @Input() user : User = {} as User;
  // @ts-ignore
  @Input() users: User[] = [];
  constructor(private http: HttpClient) { }
  // @ts-ignore
  public doRegistration(user){
    return this.http.post("http://localhost:9999/users",user,{responseType:'text' as 'json'});
  }

  getUserById(id: number): Observable<User>{
    const url = `${this.userUrl}/${id}`;
    // @ts-ignore
    /*return this.http.get<User>(url).pipe(
     // tap(selectedUser => console.log(`selected user = ${JSON.stringify(selectedUser)}`)),
      //catchError(error => of(new User()))
    );*/
    // @ts-ignore
    return this.http.get<User>(url).subscribe(user => {
      this.user = user;
    });


  }
  updateUser(user: User): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<User>(`${this.userUrl}/${user.userId}`,user);

  }
  /*getById(id: number): Observable<User>{
   // return this.users.find(p => p.userId == id);
    return of(this.user.(user => user.userId === id));
  }*/
  get(id: any): Observable<User>{
    // @ts-ignore
    return this.http.get(`${baseUrl}/${id}`);
  }
}
