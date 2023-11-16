import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-danger-button',
    standalone: true,
    templateUrl: './danger-button.component.html',
    styleUrl: './danger-button.component.css',
    imports: [CommonModule, ButtonComponent, MatButtonModule]
})
export class DangerButtonComponent {

}
