import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  showList: boolean = true;
  people = [{
    name: 'John',
    age: 34,
    hairColor: 'Brown'
  }, {
    name: 'Jane',
    age: 45,
    hairColor: 'Black'
  }, {
    name: 'Bob',
    age: 54,
    hairColor: 'Blonde'
  }];
}
