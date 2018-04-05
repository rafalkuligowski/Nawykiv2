import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-habit',
  templateUrl: './new-habit.component.html',
  styleUrls: ['./new-habit.component.css']
})
export class NewHabitComponent implements OnInit {
  newHabit: string;
  constructor() { }

  ngOnInit() {
  }

}
