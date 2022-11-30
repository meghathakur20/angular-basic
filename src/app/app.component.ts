import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular123 ' + VERSION.major;

  selectedDetail: any;
  details: any[] = [
    { name: 'megha', id: 1, age: 24 },
    { name: 'Ankush', id: 2, age: 33 },
    { name: 'Adi', id: 3, age: 30 },
  ];

  showdetails(details) {
    this.selectedDetail = details;
  }

  clear(event) {
    this.selectedDetail = '';
  }
}
