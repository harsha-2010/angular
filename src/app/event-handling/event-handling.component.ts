import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-event-handling',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {
  message = "I'm a component";
  doSomething(message: string): void {
    alert('Hello! '+message);
  }
}
