import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Manager';
  description = 'Photo';
  url = 'https://ci-prod.imgix.net/upload/paises/00200408.jpg?w=2520&fit=crop&auto=compress%2Cformat'
}
