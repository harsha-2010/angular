import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-congratulations-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './congratulations-message.component.html',
  styleUrl: './congratulations-message.component.css'
})
export class CongratulationsMessageComponent {
  @Input() count: number = 0;
  @Input() threshold: number = 10;
}
