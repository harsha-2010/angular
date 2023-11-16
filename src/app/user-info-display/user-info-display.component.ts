import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoService } from '../user-info.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-info-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-info-display.component.html',
  styleUrl: './user-info-display.component.css',
})

export class UserInfoDisplayComponent {
  isLoading: boolean = true;
  info: any = {};
  constructor(
    private userInfo: UserInfoService,
    
  ) { }

  ngOnInit(): void { 
    this.userInfo.loadData()
    .subscribe(userInfo => {
      this.info = userInfo;
      this.isLoading = false;
    });
  }
}
