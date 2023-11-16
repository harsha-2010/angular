import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongratulationsMessageComponent } from "../congratulations-message/congratulations-message.component";
import { CounterButtonComponent } from "../counter-button/counter-button.component";
import { Router} from "@angular/router";
import { ViewEncapsulation } from '@angular/compiler';
import { MatButtonModule} from '@angular/material/button';
import { TipSectionComponent } from "../tip-section/tip-section.component";

@Component({
    selector: 'app-counter-button-page',
    standalone: true,
    templateUrl: './counter-button-page.component.html',
    styleUrl: './counter-button-page.component.css',
    imports: [CommonModule, CongratulationsMessageComponent, CounterButtonComponent, MatButtonModule, TipSectionComponent]
})
export class CounterButtonPageComponent {
  count: number = 0;
  threshold: number = 10;
  showCounterButton: boolean = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }
  incrementCount(): void {
    this.count += 1;
    if(this.count > this.threshold){
      this.router.navigateByUrl('/event-handling');
    }
  }

  toggleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
  }
}

