import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MatButtonModule],
  templateUrl: './user-info-form.component.html',
  styleUrl: './user-info-form.component.css'
})
export class UserInfoFormComponent {
  public name: string;
  public age: string;
  public hairColor: string;
  constructor() {
    this.name = '';
    this.age = '';
    this.hairColor = '';
  }

  displayValues(): void {
    alert(`Name: ${this.name}, Age: ${this.age}, Hair Color: ${this.hairColor}`);
  }
}
