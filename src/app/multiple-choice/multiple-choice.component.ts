import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css', './other-styles.css']
})
export class MultipleChoiceComponent {
  @Output() a = new EventEmitter<void>();
  @Output() b = new EventEmitter<void>();
  @Output() c = new EventEmitter<void>();
  @Output() d = new EventEmitter<void>();

  aClicked(): void {
    this.a.emit();
  }
  bClicked(): void {
    this.b.emit();
  }
  cClicked(): void {
    this.c.emit();
  }
  dClicked(): void {
    this.d.emit();
  }
}
