import {Component, OnInit} from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  title = 'angular-interview';
  localNumber: number = 0;
  // @ts-ignore
  volunteerForm: FormGroup;
  number1 = 1;
  number2 = 2;
  name = new FormControl('');
  backgroundToggle: any = false;
  arr: any = ['apple','pineapple'];
  objs = [{
    lastName: 'Smith', age:12, address: [
      {
      city: 'Vilnius', street: 'Druskio'
    },
      {city: 'Klaipeda', street: 'Baltijos'}]
  },
    {lastName: 'Jeremy', age:24, address: [
    {
      city: 'Vilnius', street: 'Viesulo'
    },
    {city: 'Klaipeda', street: 'Pilies'}]
}

  ];
  obj = {
    firstName: 'John', lastName: 'Blacksmith', address: {
      city: 'Alytus', street: 'Puntuko'
    }
  }

  date: Date = new Date();



  constructor(private fb:FormBuilder) {
  }
  ngOnInit(){
    this.initializeForm();
  }

  min(num1:number, num2:number){
    return Math.min(num1,num2);
  }
  sum(num1:number, num2:number){
    return num1+num2;
  }

   initializeForm(): void {
    this.volunteerForm = this.fb.group({
      firstName: 'Name here',
      phoneNumber: '',
    })
  }
  onSubmit(): void{
    console.log(this.volunteerForm);
  }
}
