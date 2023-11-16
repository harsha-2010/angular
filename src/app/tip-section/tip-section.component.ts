import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule} from '@angular/material/button';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tip-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  templateUrl: './tip-section.component.html',
  styleUrl: './tip-section.component.css'
})
export class TipSectionComponent {
  @Input() content = ''; 
  exclamationPointIcon = faExclamationCircle;
}
