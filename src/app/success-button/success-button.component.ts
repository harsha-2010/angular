import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-success-button',
    standalone: true,
    templateUrl: './success-button.component.html',
    styleUrl: './success-button.component.css',
    imports: [CommonModule, ButtonComponent, MatButtonModule]
})
export class SuccessButtonComponent {

}
