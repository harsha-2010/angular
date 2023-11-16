import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
// Importing forms module 
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from 
	'@angular/platform-browser/animations'; 

import { AppComponent } from './app.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule} from '@angular/material/button';
@NgModule({ 
bootstrap: [ 
	
], 
declarations: [ 
	
], 
imports: [ 
	FormsModule, 
	BrowserModule, 
	BrowserAnimationsModule,
	HttpClientModule,
	FontAwesomeModule, 
	MatButtonModule,
] 
}) 
export class AppModule { } 
