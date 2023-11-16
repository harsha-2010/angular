import { Routes } from '@angular/router';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { ExampleComponent } from './example/example.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {UserInfoFormComponent} from './user-info-form/user-info-form.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
export const routes: Routes = [
    { path: 'counter-button-page', component: CounterButtonPageComponent},
    { path: 'event-handling', component: EventHandlingComponent},
    { path: 'example', component: ExampleComponent},
    { path: 'multiple-choice', component: MultipleChoiceComponent},
    { path: 'people-list', component: PeopleListComponent},
    { path: 'params-example/:urlParam/:anotherParam', component: ParamsExampleComponent},
    { path: 'user-info-form', component: UserInfoFormComponent},
    { path: 'user-info-display', component: UserInfoDisplayComponent},
    { path: '', redirectTo: '/counter-button-page', pathMatch: "full"},
    { path: '**', component: NotFoundPageComponent},
];
