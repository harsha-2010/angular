import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './params-example.component.html',
  styleUrl: './params-example.component.css'
})
export class ParamsExampleComponent {
  urlParam: string = '';
  anotherParam: string = '';
  params: any[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get('urlParam') || '';
    this.anotherParam = this.route.snapshot.paramMap.get('anotherParam') || '';
    //console.log(this.route.queryParams);
    this.route.queryParams.subscribe((params: { [x: string]: any; }) => {
      this.params = Object.keys(params).map(key => ({name: key, value: params[key]}))});
  }
}
