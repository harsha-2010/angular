import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { PeopleListComponent } from "./people-list/people-list.component";
import { EventHandlingComponent } from "./event-handling/event-handling.component";
import { MultipleChoiceComponent } from "./multiple-choice/multiple-choice.component";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CongratulationsMessageComponent } from "./congratulations-message/congratulations-message.component";
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { ButtonComponent} from './button/button.component'
// Importing forms module 
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./nav-bar/nav-bar.component"; 
import { UserInfoDisplayComponent } from "./user-info-display/user-info-display.component";
import { DangerButtonComponent } from "./danger-button/danger-button.component";
import { SuccessButtonComponent } from "./success-button/success-button.component";
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule} from '@angular/material/button';
import { CounterButtonPageComponent } from "./counter-button-page/counter-button-page.component";
import { HttpModule } from './http.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HttpClientModule, ExampleComponent, PeopleListComponent, EventHandlingComponent, MultipleChoiceComponent, CounterButtonComponent, CongratulationsMessageComponent, UserInfoFormComponent, FormsModule, NavBarComponent, UserInfoDisplayComponent, ButtonComponent, DangerButtonComponent, SuccessButtonComponent, FontAwesomeModule, MatButtonModule, CounterButtonPageComponent, HttpModule]
})

export class AppComponent implements OnInit{

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
  title = 'my-angular-app';
  
  doSomething(): void {
    alert('Doing Something....');
  }
  doSomethingElse(): void {
    alert('Doing something else....');
  }
  doAnotherThing(): void {
    alert('Doing another thing....');
  }
}

