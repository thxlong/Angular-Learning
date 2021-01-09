import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên component sẽ nhúng vào html
  templateUrl: './app.component.html', // Khai báo file html của component
  styleUrls: ['./app.component.scss'], // Khai báo file scss cuar component
})
export class AppComponent {
  title = 'app';
}
