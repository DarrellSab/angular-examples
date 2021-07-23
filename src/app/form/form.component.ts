import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({})
  }

  submit() {
    console.log('form is submitted', this.form);
  }
}
