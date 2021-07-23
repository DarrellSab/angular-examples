import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
@Input() count: number = 0;
@Output() countChange: EventEmitter<number> = new EventEmitter<number>();
localNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.count++;
    this.countChange.emit(this.count);
  }

}
