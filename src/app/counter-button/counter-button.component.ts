import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent implements OnInit, OnDestroy {

  @Input() count: number=0;
  @Output() buttonClicked = new EventEmitter<void>();
  pointerIcon = faHandPointer;

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  onClick(): void {
    this.buttonClicked.emit();
  }

}
