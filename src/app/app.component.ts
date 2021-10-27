import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    photos = [
        {
            url: "https://ci-prod.imgix.net/upload/paises/00200408.jpg?w=2520&fit=crop&auto=compress%2Cformat",
            description: "Img1"
        },
        {
            url: "https://www.viajoteca.com/wp-content/uploads/2018/06/roteiro-canada-pexel-andre-scaled.jpg",
            description: "Img2"
        },
        {
            url: "https://ci-prod.imgix.net/upload/paises/00200408.jpg?w=2520&fit=crop&auto=compress%2Cformat",
            description: "Img1"
        },
        {
            url: "https://www.viajoteca.com/wp-content/uploads/2018/06/roteiro-canada-pexel-andre-scaled.jpg",
            description: "Img2"
        }
    ];
}
